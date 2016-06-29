Template.tabularTable.helpers({
    isReady:function(){
        if(_.isUndefined(this._isReady)) this._isReady = new ReactiveVar(false);
        return this._isReady.get();
    },
    initRenderStart:function(){
        this._isReady = new ReactiveVar(false)
    },
    initPublish:function(){
        Template.tabularTable.init(this, false);
    },
    _tableData: function() {
        return Template.tabularTable.init(this, true); 
    },
});


Template.tabularTable.init = function(data, isPublishReady) {
        var self = data;
        var tabularConf = {
                                             collection:self.collection,
                                             selector:self.selector,
                                             extraFields:self.extraFields,
                                             columns:self.columns
                                      }



        var name = tabularConf.name + "_" + tabularConf.collection._collection.name + JSON.stringify(tabularConf.selector);


        if(isDefined(TabularTables[name])) {
            if(isUndefined(self._isReady)) self._isReady = new ReactiveVar(false);
            self._isReady.set(true);
            return TabularTables[name];  
        }




        if(!isPublishReady) {
            Meteor.call('defineTabularTable', 
                name, 
                tabularConf.collection._collection.name,
                tabularConf.columns,
                tabularConf.extraFields,
                tabularConf.selector,
                tabularConf.pub,
                function(error) {
                    if(error) {
                        console.log(error);
                    }
                    else
                    {
                        self._isReady.set(true);    
                    }
                }
            );    
        }
        else
        {
            var tabularOptions = {
                name        : name,
                extraFields : tableOptions.extraFields,
                selector    : function( userId ) {
                                return tabularConf.selector;
                              },
                collection  : tabularConf.collection,
                columns     : tabularConf.columns,
                responsive: true,
                autoWidth: false,
                throttleRefresh: 5000
            };

            if (!_.isUndefined(self.tabularConf.pub)) tabularOptions.pub = tabularConf.pub;

            if(!_.isUndefined(name)) {
                TabularTables[name] = new Tabular.Table(tabularOptions);
                return TabularTables[name];
            }
            else
            {
                return new Tabular.Table(tabularOptions);  
            }
        }    
}
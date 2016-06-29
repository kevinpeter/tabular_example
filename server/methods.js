Meteor.methods({
    defineTabularTable:function(name, collectionName, columns, extraFields, selector, publishName){
        //Check if tabular already exists on server side
        if(!_.isUndefined(TabularTables[name])) return;

        var tableProperties = {
          name: name,
          collection: db[collectionName],
          columns: columns
        };

        if(!_.isUndefined(publishName))  tableProperties.pub = publishName;
        if(!_.isUndefined(publishName))  tableProperties.extraFields = extraFields;
        if(!_.isObject(selector))        selector = {};



        tableProperties.selector =  function( userId ) {
                                        //Here you can make global role and right checks
                                        //if(!hasRights(userId)) return;

                                        return selector;
                                    };

        TabularTables[name] = new Tabular.Table(tableProperties);
    }
});
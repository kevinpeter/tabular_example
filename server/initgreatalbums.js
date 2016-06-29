Meteor.startup(function () {

//==============================


    var greatAlbums;


    greatAlbums = [

        {
            artNr: 1,
            inStock: 0,
            albumTitle: "Marks",
            artistName: "Alquin",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 2,
            inStock: 1,
            albumTitle: "Quiet Is the New Loud",
            artistName: "Kings of Convenience",
            backOrdersPossible: true,
            price: 8.25
        },
        {
            artNr: 3,
            inStock: 6,
            albumTitle: "Sgt. Pepper's Lonely Hearts Club Band",
            artistName: "The Beatles",
            backOrdersPossible: false,
            price: 8.14
        },
        {
            artNr: 4,
            inStock: 30,
            albumTitle: "Freak Out",
            artistName: "The Mothers of Invention",
            backOrdersPossible: false,
            price: 8.24
        },
        {
            artNr: 5,
            inStock: 7,
            albumTitle: "Led Zeppelin",
            artistName: "Led Zeppelin",
            backOrdersPossible: true,
            price: 8.9
        },
        {
            artNr: 6,
            inStock: 0,
            albumTitle: "Trust Fall (Side A) (EP)",
            artistName: "Incubus",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 7,
            inStock: 5,
            albumTitle: "Imagine",
            artistName: "John Lennon",
            backOrdersPossible: true,
            price: 8.30
        },
        {
            artNr: 8,
            inStock: 2,
            albumTitle: "Wish you were here",
            artistName: "Pink Floyd",
            backOrdersPossible: false,
            price: 8.30
        },
        {
            artNr: 9,
            inStock: 9,
            albumTitle: "Something Else by the Kinks",
            artistName: "The Kinks",
            backOrdersPossible: true,
            price: 8.29
        },
        {
            artNr: 10,
            inStock: 8,
            albumTitle: "Sounds of Silence",
            artistName: "Simon & Garfunkel",
            backOrdersPossible: false,
            price: 8.48
        },
        {
            artNr: 11,
            inStock: 3,
            albumTitle: "Woodstock",
            artistName: "Various Artists",
            backOrdersPossible: false,
            price: 8.20
        },
        {
            artNr: 12,
            inStock: 12,
            albumTitle: "The White Album",
            artistName: "The Beatles",
            backOrdersPossible: true,
            price: 8.18
        },
        {
            artNr: 13,
            inStock: 10,
            albumTitle: "The Concert for Bangla Desh",
            artistName: "Various Artists",
            backOrdersPossible: true,
            price: 8.47
        },
        {
            artNr: 14,
            inStock: 0,
            albumTitle: "Passione",
            artistName: "Andrea Bocelli",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 15,
            inStock: 13,
            albumTitle: "Led Zeppelin",
            artistName: "Led Zeppelin II",
            backOrdersPossible: true,
            price: 8.14
        },
        {
            artNr: 16,
            inStock: 15,
            albumTitle: "What's Going On",
            artistName: "Marvin Gaye",
            backOrdersPossible: true,
            price: 8.37
        },
        {
            artNr: 17,
            inStock: 16,
            albumTitle: "The Dark Side of the Moon",
            artistName: "Pink Floyd",
            backOrdersPossible: false,
            price: 8.29
        },
        {
            artNr: 18,
            inStock: 19,
            albumTitle: "Jonathan Richman and the Modern Lovers",
            artistName: "Jonathan Richman and the Modern Lovers",
            backOrdersPossible: true,
            price: 8.24
        },
        {
            artNr: 19,
            inStock: 35,
            albumTitle: "Abbey Road",
            artistName: "The Beatles",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 20,
            inStock: 4,
            albumTitle: "Jesus Christ Superstar",
            artistName: "Soundtrack",
            backOrdersPossible: false,
            price: 8.20
        },
        {
            artNr: 21,
            inStock: 20,
            albumTitle: "Pet Sounds",
            artistName: "The Beach Boys",
            backOrdersPossible: true,
            price: 8.17
        },
        {
            artNr: 22,
            inStock: 18,
            albumTitle: "Partners",
            artistName: "Barbra Streisand",
            backOrdersPossible: true,
            price: 8.40
        },
        {
            artNr: 23,
            inStock: 23,
            albumTitle: "Hypnotic Eye",
            artistName: "Tom Petty and the Heartbreakers",
            backOrdersPossible: false,
            price: 8.22
        },
        {
            artNr: 24,
            inStock: 22,
            albumTitle: "Harvest",
            artistName: "Neil Young",
            backOrdersPossible: false,
            price: 8.30
        },
        {
            artNr: 25,
            inStock: 24,
            albumTitle: "Whitney Houston",
            artistName: "Whitney Houston",
            backOrdersPossible: false,
            price: 8.32
        },
        {
            artNr: 26,
            inStock: 29,
            albumTitle: "Transformer",
            artistName: "Lou Reed",
            backOrdersPossible: true,
            price: 8.33
        },
        {
            artNr: 27,
            inStock: 28,
            albumTitle: "Are you experienced",
            artistName: "Jimi Hendrix",
            backOrdersPossible: true,
            price: 8.99
        },
        {
            artNr: 28,
            inStock: 0,
            albumTitle: "Revolver",
            artistName: "The Beatles",
            backOrdersPossible: false,
            price: 8.15
        },
        {
            artNr: 29,
            inStock: 33,
            albumTitle: "Live at Leeds",
            artistName: "The Who",
            backOrdersPossible: false,
            price: 8.19
        },
        {
            artNr: 30,
            inStock: 0,
            albumTitle: "Sign of the Times",
            artistName: "Prince",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 31,
            inStock: 31,
            albumTitle: "Blues Breakers",
            artistName: "John Mayall With Eric Clapton",
            backOrdersPossible: true,
            price: 8.38
        },
        {
            artNr: 32,
            inStock: 0,
            albumTitle: "The Definitive Collection",
            artistName: "Abba",
            backOrdersPossible: false,
            price: 8.11
        },
        {
            artNr: 33,
            inStock: 32,
            albumTitle: "The World Is a Ghetto",
            artistName: "War",
            backOrdersPossible: false,
            price: 8.11
        },
        {
            artNr: 34,
            inStock: 25,
            albumTitle: "Every Picture Tells a Story",
            artistName: "Rod Stewart",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 35,
            inStock: 37,
            albumTitle: "1999",
            artistName: "Prince",
            backOrdersPossible: false,
            price: 8.15
        },
        {
            artNr: 36,
            inStock: 27,
            albumTitle: "Ballad of Easy Rider",
            artistName: "The Byrds",
            backOrdersPossible: true,
            price: 8.31
        },
        {
            artNr: 37,
            inStock: 36,
            albumTitle: "Santana",
            artistName: "Santana",
            backOrdersPossible: true,
            price: 8.66
        },
        {
            artNr: 38,
            inStock: 14,
            albumTitle: "Goodbey Yellow Brick Road",
            artistName: "Elton John",
            backOrdersPossible: true,
            price: 8.25
        },
        {
            artNr: 39,
            inStock: 33,
            albumTitle: "The Wall",
            artistName: "Pink Floyd",
            backOrdersPossible: true,
            price: 8.24
        },
        {
            artNr: 40,
            inStock: 38,
            albumTitle: "Deja Vu",
            artistName: "Crosby, Stills, Nash and Young",
            backOrdersPossible: false,
            price: 8.18
        },
        {
            artNr: 41,
            inStock: 0,
            albumTitle: "Born in the U.S.A.",
            artistName: "Bruce Springsteen",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 42,
            inStock: 44,
            albumTitle: "Love Lust Faith + Dreams",
            artistName: "Thirty Seconds to Mars",
            backOrdersPossible: true,
            price: 8.42
        },
        {
            artNr: 43,
            inStock: 45,
            albumTitle: "The Yes Album",
            artistName: "Yes",
            backOrdersPossible: true,
            price: 8.60
        },
        {
            artNr: 44,
            inStock: 41,
            albumTitle: "Blind Faith",
            artistName: "Blind Faith",
            backOrdersPossible: false,
            price: 8.27
        },
        {
            artNr: 45,
            inStock: 48,
            albumTitle: "My Little Red Book of Winners",
            artistName: "Manfred Mann",
            backOrdersPossible: true,
            price: 8.33
        },
        {
            artNr: 46,
            inStock: 26,
            albumTitle: "The Monkees",
            artistName: "The Monkees",
            backOrdersPossible: false,
            price: 8.35
        },
        {
            artNr: 47,
            inStock: 56,
            albumTitle: "Live At Reading 83",
            artistName: "Ten Years After",
            backOrdersPossible: false,
            price: 8.12
        },
        {
            artNr: 48,
            inStock: 46,
            albumTitle: "Free Live",
            artistName: "Free",
            backOrdersPossible: true,
            price: 8.32
        },
        {
            artNr: 49,
            inStock: 63,
            albumTitle: "Live At Bush Hall 2007",
            artistName: "Gary Moore",
            backOrdersPossible: true,
            price: 8.25
        },
        {
            artNr: 50,
            inStock: 47,
            albumTitle: "Paris, Texas",
            artistName: "Ry Cooder",
            backOrdersPossible: true,
            price: 8.50
        },
        {
            artNr: 51,
            inStock: 39,
            albumTitle: "Band on the Run",
            artistName: "Paul McCartney & Wings",
            backOrdersPossible: true,
            price: 8.13
        },
        {
            artNr: 52,
            inStock: 42,
            albumTitle: "Saturday Night Fever",
            artistName: "Soundtrack",
            backOrdersPossible: true,
            price: 8.42
        },
        {
            artNr: 53,
            inStock: 21,
            albumTitle: "Songs From Tsongas",
            artistName: "Yes",
            backOrdersPossible: false,
            price: 8.55
        },
        {
            artNr: 54,
            inStock: 54,
            albumTitle: "Goodbye",
            artistName: "Cream",
            backOrdersPossible: false,
            price: 8.33
        },
        {
            artNr: 55,
            inStock: 67,
            albumTitle: "Long Distance Voyager",
            artistName: "The Moody Blues",
            backOrdersPossible: false,
            price: 8.32
        },
        {
            artNr: 56,
            inStock: 0,
            albumTitle: "Live At The Regal",
            artistName: "B.B. King",
            backOrdersPossible: false,
            price: 8.99
        },
        {
            artNr: 57,
            inStock: 55,
            albumTitle: "Jagged Little Pill",
            artistName: "Alanis Morissette",
            backOrdersPossible: false,
            price: 8.23
        },
        {
            artNr: 58,
            inStock: 0,
            albumTitle: "666",
            artistName: "Aphrodite's Child",
            backOrdersPossible: false,
            price: 8.19
        },
        {
            artNr: 59,
            inStock: 0,
            albumTitle: "The Complete Collection",
            artistName: "B.B. King",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 60,
            inStock: 58,
            albumTitle: "After the Gold Rush",
            artistName: "Neil Young",
            backOrdersPossible: true,
            price: 8.16
        },
        {
            artNr: 61,
            inStock: 40,
            albumTitle: "Badfinger",
            artistName: "Badfinger",
            backOrdersPossible: false,
            price: 8.45
        },
        {
            artNr: 62,
            inStock: 50,
            albumTitle: "The Name Remains the Same",
            artistName: "Ten Years After",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 63,
            inStock: 52,
            albumTitle: "Nevermind",
            artistName: "Nirvana",
            backOrdersPossible: true,
            price: 8.25
        },
        {
            artNr: 64,
            inStock: 17,
            albumTitle: "Myths and Heroes",
            artistName: "Fairport Convention",
            backOrdersPossible: true,
            price: 8.25
        },
        {
            artNr: 65,
            inStock: 11,
            albumTitle: "The Best of Bread",
            artistName: "Bread",
            backOrdersPossible: true,
            price: 8.25
        },
        {
            artNr: 66,
            inStock: 0,
            albumTitle: "My People Were Fair and Had Sky in Their Hair",
            artistName: "T.Rex",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 67,
            inStock: 0,
            albumTitle: "Bad Company",
            artistName: "Bad Company",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 68,
            inStock: 57,
            albumTitle: "Trilogy",
            artistName: "Emmerson Lake & Palmer",
            backOrdersPossible: true,
            price: 8.92
        },
        {
            artNr: 69,
            inStock: 90,
            albumTitle: "The Kinks Are the Village Green Preservation Society",
            artistName: "The Kinks",
            backOrdersPossible: false,
            price: 8.52
        },
        {
            artNr: 70,
            inStock: 4,
            albumTitle: "Songs of Love and Hate",
            artistName: "Leonard Cohen",
            backOrdersPossible: true,
            price: 8.36
        },
        {
            artNr: 71,
            inStock: 1,
            albumTitle: "The Best of Sade",
            artistName: "Sade",
            backOrdersPossible: true,
            price: 8.70
        },
        {
            artNr: 72,
            inStock: 4,
            albumTitle: "Journey&#039;s Greatest Hits",
            artistName: "Journey",
            backOrdersPossible: true,
            price: 8.35
        },
        {
            artNr: 73,
            inStock: 1,
            albumTitle: "Born To Die",
            artistName: "Lana Del Rey",
            backOrdersPossible: false,
            price: 8.72
        },
        {
            artNr: 74,
            inStock: 1,
            albumTitle: "Millennium",
            artistName: "Backstreet Boys",
            backOrdersPossible: false,
            price: 8.28
        },
        {
            artNr: 75,
            inStock: 0,
            albumTitle: "Get Rich or Die Tryin'",
            artistName: "50 Cent",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 76,
            inStock: 4,
            albumTitle: "Back to Black",
            artistName: "Amy Winehouse",
            backOrdersPossible: false,
            price: 8.41
        },
        {
            artNr: 77,
            inStock: 2,
            albumTitle: "The Fame",
            artistName: "Lady Gaga",
            backOrdersPossible: true,
            price: 8.26
        },
        {
            artNr: 78,
            inStock: 0,
            albumTitle: "The Traveling Kind",
            artistName: "Emmylou Harris &amp; Rodney Crowell",
            backOrdersPossible: false,
            price: 8.15
        },
        {
            artNr: 79,
            inStock: 4,
            albumTitle: "MTV Unplugged In New York",
            artistName: "Nirvana",
            backOrdersPossible: true,
            price: 8.84
        },
        {
            artNr: 80,
            inStock: 2,
            albumTitle: "The Joshua Tree",
            artistName: "U2",
            backOrdersPossible: true,
            price: 8.17
        },
        {
            artNr: 81,
            inStock: 8,
            albumTitle: "X&Y",
            artistName: "Coldplay",
            backOrdersPossible: true,
            price: 8.13
        },
        {
            artNr: 82,
            inStock: 7,
            albumTitle: "The Marshall Mathers LP 2",
            artistName: "Eminem",
            backOrdersPossible: true,
            price: 8.80
        },
        {
            artNr: 83,
            inStock: 2,
            albumTitle: "NOW 53",
            artistName: "Various Artists",
            backOrdersPossible: false,
            price: 8.15
        },
        {
            artNr: 84,
            inStock: 6,
            albumTitle: "Life for Rent",
            artistName: "Dido",
            backOrdersPossible: false,
            price: 8.63
        },
        {
            artNr: 85,
            inStock: 4,
            albumTitle: "I'm a Man",
            artistName: "The Spencer Davis Group",
            backOrdersPossible: false,
            price: 8.22
        },
        {
            artNr: 86,
            inStock: 2,
            albumTitle: "The Angry Young Them",
            artistName: "Them",
            backOrdersPossible: false,
            price: 8.26
        },
        {
            artNr: 87,
            inStock: 2,
            albumTitle: "Legend: The Best Of Bob Marley And The Wailers",
            artistName: "Bob Marley And The Wailers",
            backOrdersPossible: false,
            price: 8.34
        },
        {
            artNr: 88,
            inStock: 5,
            albumTitle: "Beautiful World",
            artistName: "Take That",
            backOrdersPossible: false,
            price: 8.39
        },
        {
            artNr: 89,
            inStock: 9,
            albumTitle: "...But Seriously",
            artistName: "Phil Collins",
            backOrdersPossible: false,
            price: 7.75
        },
        {
            artNr: 90,
            inStock: 0,
            albumTitle: "Jeff Wayne's Musical Version of The War of the Worlds",
            artistName: "Jeff Wayne",
            backOrdersPossible: false,
            price: 8.22
        },
        {
            artNr: 91,
            inStock: 1,
            albumTitle: "A Rush of Blood to the Head",
            artistName: "Coldplay",
            backOrdersPossible: true,
            price: 8.85
        },
        {
            artNr: 92,
            inStock: 3,
            albumTitle: "Ultimate Sinatra",
            artistName: "Frank Sinatra",
            backOrdersPossible: false,
            price: 8.45
        },
        {
            artNr: 93,
            inStock: 0,
            albumTitle: "The Eminem Show",
            artistName: "Eminem",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 94,
            inStock: 1,
            albumTitle: "Fuse",
            artistName: "Keith Urban",
            backOrdersPossible: true,
            price: 8.59
        },
        {
            artNr: 95,
            inStock: 4,
            albumTitle: "Spicks and Specks",
            artistName: "Bee Gees",
            backOrdersPossible: false,
            price: 8.37
        },
        {
            artNr: 96,
            inStock: 2,
            albumTitle: "Himself",
            artistName: "Gilbert O'Sullivan",
            backOrdersPossible: true,
            price: 8.50
        },
        {
            artNr: 97,
            inStock: 1,
            albumTitle: "Greatest Hits: We Will Rock You",
            artistName: "Queen",
            backOrdersPossible: false,
            price: 8.42
        },
        {
            artNr: 98,
            inStock: 7,
            albumTitle: "+",
            artistName: "Ed Sheeran",
            backOrdersPossible: false,
            price: 8.14
        },
        {
            artNr: 99,
            inStock: 1,
            albumTitle: "21",
            artistName: "Adele",
            backOrdersPossible: true,
            price: 8.22
        },
        {
            artNr: 100,
            inStock: 0,
            albumTitle: "Can't Forget: A Souvenir Of The Grand Tour",
            artistName: "Leonard Cohen",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 101,
            inStock: 103,
            albumTitle: "Beyonce",
            artistName: "Beyonce",
            backOrdersPossible: true,
            price: 8.75
        },
        {
            artNr: 102,
            inStock: 5,
            albumTitle: "Crisis? What Crisis?",
            artistName: "Supertramp",
            backOrdersPossible: false,
            price: 8.55
        },
        {
            artNr: 103,
            inStock: 1,
            albumTitle: "Með suð í eyrum við spilum endalaust",
            artistName: "Sigur Rós",
            backOrdersPossible: true,
            price: 8.83
        },
        {
            artNr: 104,
            inStock: 0,
            albumTitle: "Let it Be",
            artistName: "The Beatles",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 105,
            inStock: 1,
            albumTitle: "Crime of the Century",
            artistName: "Supertramp",
            backOrdersPossible: false,
            price: 8.34
        },
        {
            artNr: 106,
            inStock: 0,
            albumTitle: "Deep Collection",
            artistName: "Dj Paulo Arudo",
            backOrdersPossible: false,
            price: 8.65
        },
        {
            artNr: 107,
            inStock: 112,
            albumTitle: "Frozen",
            artistName: "Soundtrack",
            backOrdersPossible: true,
            price: 7.75
        },
        {
            artNr: 108,
            inStock: 98,
            albumTitle: "Born to be wild",
            artistName: "Steppenwolf",
            backOrdersPossible: false,
            price: 8.12
        },
        {
            artNr: 109,
            inStock: 0,
            albumTitle: "Greatest Hits",
            artistName: "Guns N&#039; Roses",
            backOrdersPossible: false,
            price: 8.33
        },
        {
            artNr: 110,
            inStock: 2,
            albumTitle: "Hydroponic Garden",
            artistName: "Carbon Based Lifeforms",
            backOrdersPossible: false,
            price: 8.63
        },
        {
            artNr: 111,
            inStock: 9,
            albumTitle: "Eva by Heart",
            artistName: "Eva Cassidy",
            backOrdersPossible: false,
            price: 8.34
        },
        {
            artNr: 112,
            inStock: 1,
            albumTitle: "The Invisible Way",
            artistName: "Low",
            backOrdersPossible: false,
            price: 8.13
        },
        {
            artNr: 113,
            inStock: 1,
            albumTitle: "Ketevan",
            artistName: "Katie Melua",
            backOrdersPossible: true,
            price: 8.21
        },
        {
            artNr: 114,
            inStock: 3,
            albumTitle: "Year of the Cat",
            artistName: "Al Stewart",
            backOrdersPossible: false,
            price: 8.16
        },
        {
            artNr: 115,
            inStock: 3,
            albumTitle: "Cheap Thrills",
            artistName: "Big Brother and the Holding Company ",
            backOrdersPossible: true,
            price: 8.11
        },
        {
            artNr: 116,
            inStock: 1,
            albumTitle: "Chicago II",
            artistName: "Chicago",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 117,
            inStock: 1,
            albumTitle: "First Wives Club",
            artistName: "Soundtrack",
            backOrdersPossible: true,
            price: 8.39
        },
        {
            artNr: 118,
            inStock: 0,
            albumTitle: "Greatest Hits",
            artistName: "B.B. King",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 119,
            inStock: 1,
            albumTitle: "Greatest Hits",
            artistName: "Fleetwood Mac",
            backOrdersPossible: true,
            price: 8.85
        },
        {
            artNr: 120,
            inStock: 2,
            albumTitle: "Diane",
            artistName: "Chet Baker",
            backOrdersPossible: false,
            price: 8.44
        },
        {
            artNr: 121,
            inStock: 1,
            albumTitle: "I-Feel-Like-I'm-Fixin'-to-Die",
            artistName: "Country Joe and the Fish",
            backOrdersPossible: true,
            price: 9.81
        },
        {
            artNr: 122,
            inStock: 3,
            albumTitle: "Like a Prayer",
            artistName: "Madonna",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 123,
            inStock: 1,
            albumTitle: "Slippery When Wet",
            artistName: "Bon Jovi",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 124,
            inStock: 1,
            albumTitle: "Chaos And The Calm",
            artistName: "Raphael Saadiq",
            backOrdersPossible: true,
            price: 8.80
        },
        {
            artNr: 125,
            inStock: 9,
            albumTitle: "Revolution",
            artistName: "Q65",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 126,
            inStock: 2,
            albumTitle: "Trans-Europe Express",
            artistName: "Kraftwerk",
            backOrdersPossible: false,
            price: 8.36
        },
        {
            artNr: 127,
            inStock: 4,
            albumTitle: "Willy and the Poor Boys",
            artistName: "Creedence Clearwater Revival",
            backOrdersPossible: true,
            price: 8.75
        },
        {
            artNr: 128,
            inStock: 6,
            albumTitle: "Curtain Call: The Hits",
            artistName: "Eminem",
            backOrdersPossible: true,
            price: 8.24
        },
        {
            artNr: 129,
            inStock: 2,
            albumTitle: "Grace",
            artistName: "Jeff Buckley",
            backOrdersPossible: false,
            price: 8.88
        },
        {
            artNr: 130,
            inStock: 0,
            albumTitle: "Number Ones",
            artistName: "Michael Jackson",
            backOrdersPossible: true,
            price: 8.21
        },
        {
            artNr: 131,
            inStock: 1,
            albumTitle: "Unplugged",
            artistName: "Nirvana",
            backOrdersPossible: false,
            price: 8.37
        },
        {
            artNr: 132,
            inStock: 2,
            albumTitle: "To the Faithful Departed",
            artistName: "The Cranberries",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 133,
            inStock: 6,
            albumTitle: "In the Wee Small Hours",
            artistName: "Frank Sinatra",
            backOrdersPossible: true,
            price: 8.20
        },
        {
            artNr: 134,
            inStock: 0,
            albumTitle: "Mad Max: Fury Road (Soundtrack)",
            artistName: "Junkie XL",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 135,
            inStock: 5,
            albumTitle: "Grease",
            artistName: "Soundtrack",
            backOrdersPossible: false,
            price: 8.79
        },
        {
            artNr: 136,
            inStock: 0,
            albumTitle: "NOW That’s What I Call ACM Awards: 50 Years",
            artistName: "Various Artists",
            backOrdersPossible: false,
            price: 8.69
        },
        {
            artNr: 137,
            inStock: 5,
            albumTitle: "Love In The Future",
            artistName: "John Legend",
            backOrdersPossible: false,
            price: 8.87
        },
        {
            artNr: 138,
            inStock: 2,
            albumTitle: "Paranoid",
            artistName: "Black Sabbath",
            backOrdersPossible: false,
            price: 8.12
        },
        {
            artNr: 139,
            inStock: 0,
            albumTitle: "We're Only in It for the Money",
            artistName: "The Mothers of Invention",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 140,
            inStock: 6,
            albumTitle: "Marquee Moon",
            artistName: "Television",
            backOrdersPossible: false,
            price: 8.20
        },
        {
            artNr: 141,
            inStock: 8,
            albumTitle: "10CC",
            artistName: "10CC",
            backOrdersPossible: true,
            price: 8.92
        },
        {
            artNr: 142,
            inStock: 2,
            albumTitle: "Mothership",
            artistName: "Led Zeppelin",
            backOrdersPossible: false,
            price: 8.97
        },
        {
            artNr: 143,
            inStock: 1,
            albumTitle: "The Soft Machine",
            artistName: "The Soft Machine",
            backOrdersPossible: false,
            price: 8.61
        },
        {
            artNr: 144,
            inStock: 3,
            albumTitle: "Pink Moon",
            artistName: "Nick Drake",
            backOrdersPossible: false,
            price: 8.16
        },
        {
            artNr: 145,
            inStock: 3,
            albumTitle: "Just a Poke",
            artistName: "Sweet Smoke",
            backOrdersPossible: true,
            price: 8.50
        },
        {
            artNr: 146,
            inStock: 1,
            albumTitle: "Chronicle The 20 Greatest Hits",
            artistName: "Creedence Clearwater Revival",
            backOrdersPossible: false,
            price: 8.28
        },
        {
            artNr: 147,
            inStock: 2,
            albumTitle: "Play",
            artistName: "Moby",
            backOrdersPossible: false,
            price: 8.22
        },
        {
            artNr: 148,
            inStock: 0,
            albumTitle: "Child in Time",
            artistName: "Deep Purple",
            backOrdersPossible: false,
            price: 8.49
        },
        {
            artNr: 149,
            inStock: 1,
            albumTitle: "Master Of Puppets",
            artistName: "Metallica",
            backOrdersPossible: false,
            price: 8.83
        },
        {
            artNr: 150,
            inStock: 1,
            albumTitle: "The Turning Point",
            artistName: "John Mayall",
            backOrdersPossible: false,
            price: 8.35
        },
        {
            artNr: 151,
            inStock: 1,
            albumTitle: "Back In Black",
            artistName: "AC/DC",
            backOrdersPossible: false,
            price: 8.17
        },
        {
            artNr: 152,
            inStock: 0,
            albumTitle: "Ultimate Hits",
            artistName: "Bob Seger &amp; The Silver Bullet Band",
            backOrdersPossible: true,
            price: 8.94
        },
        {
            artNr: 153,
            inStock: 8,
            albumTitle: "Aqualung",
            artistName: "Jethro Tull",
            backOrdersPossible: false,
            price: 8.18
        },
        {
            artNr: 154,
            inStock: 5,
            albumTitle: "New Boots and Panties!!",
            artistName: "Ian Dury",
            backOrdersPossible: false,
            price: 8.12
        },
        {
            artNr: 155,
            inStock: 8,
            albumTitle: "Having a Rave Up With the Yardbirds",
            artistName: "The Yardbirds",
            backOrdersPossible: true,
            price: 8.75
        },
        {
            artNr: 156,
            inStock: 4,
            albumTitle: "Bad",
            artistName: "Michael Jackson",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 157,
            inStock: 1,
            albumTitle: "Mad Dogs & Englishmen",
            artistName: "Joe Cocker",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 158,
            inStock: 3,
            albumTitle: "Stankonia",
            artistName: "OutKast",
            backOrdersPossible: false,
            price: 8.75
        },
        {
            artNr: 159,
            inStock: 1,
            albumTitle: "The Piper at the Gates of Dawn",
            artistName: "Pink Floyd",
            backOrdersPossible: false,
            price: 8.67
        },
        {
            artNr: 160,
            inStock: 0,
            albumTitle: "Modern Lovers",
            artistName: "Modern Lovers",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 161,
            inStock: 1,
            albumTitle: "Volunteers",
            artistName: "Jefferson Airplane",
            backOrdersPossible: false,
            price: 8.50
        },
        {
            artNr: 162,
            inStock: 2,
            albumTitle: "Greatest Hits 1970-2002",
            artistName: "Elton John",
            backOrdersPossible: true,
            price: 8.83
        },
        {
            artNr: 163,
            inStock: 8,
            albumTitle: "Number One Hits",
            artistName: "Tim McGraw",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 164,
            inStock: 4,
            albumTitle: "Dummy",
            artistName: "Portishead",
            backOrdersPossible: false,
            price: 8.55
        },
        {
            artNr: 165,
            inStock: 173,
            albumTitle: "All or Nothing: The U.S.-Remix Album",
            artistName: "Milli Vanilli",
            backOrdersPossible: true,
            price: 8.15
        },
        {
            artNr: 166,
            inStock: 5,
            albumTitle: "Super Session",
            artistName: "Al Kooper with Stephen Stills and Mike Bloomfield",
            backOrdersPossible: false,
            price: 8.85
        },
        {
            artNr: 167,
            inStock: 3,
            albumTitle: "Help",
            artistName: "The Beatles",
            backOrdersPossible: false,
            price: 8.77
        },
        {
            artNr: 168,
            inStock: 0,
            albumTitle: "Aerosmith's Greatest Hits",
            artistName: "Aerosmith",
            backOrdersPossible: false,
            price: 8.35
        },
        {
            artNr: 169,
            inStock: 1,
            albumTitle: "The Animals",
            artistName: "The Animals",
            backOrdersPossible: true,
            price: 8.21
        },
        {
            artNr: 170,
            inStock: 4,
            albumTitle: "Happy Together",
            artistName: "The Turtles",
            backOrdersPossible: true,
            price: 8.46
        },
        {
            artNr: 171,
            inStock: 5,
            albumTitle: "Greatest Hits II",
            artistName: "Kenny Chesney",
            backOrdersPossible: false,
            price: 8.19
        },
        {
            artNr: 172,
            inStock: 164,
            albumTitle: "Moonmadness",
            artistName: "Camel",
            backOrdersPossible: true,
            price: 8.30
        },
        {
            artNr: 173,
            inStock: 191,
            albumTitle: "In a Gadda da Vida",
            artistName: "Iron Butterfly",
            backOrdersPossible: true,
            price: 8.45
        },
        {
            artNr: 174,
            inStock: 0,
            albumTitle: "The Rise and Fall of Ziggy Stardust and the Spiders From Mars",
            artistName: "David Bowie",
            backOrdersPossible: true,
            price: 8.10
        },
        {
            artNr: 175,
            inStock: 0,
            albumTitle: "The Essential Johnny Cash",
            artistName: "Johnny Cash",
            backOrdersPossible: false,
            price: 8.14
        },
        {
            artNr: 176,
            inStock: 5,
            albumTitle: "Thriller",
            artistName: "Michael Jackson",
            backOrdersPossible: true,
            price: 8.41
        },
        {
            artNr: 177,
            inStock: 5,
            albumTitle: "Rumours",
            artistName: "Fleetwood Mac",
            backOrdersPossible: true,
            price: 8.36
        },
        {
            artNr: 178,
            inStock: 1,
            albumTitle: "The Doors",
            artistName: "The Doors",
            backOrdersPossible: true,
            price: 8.31
        },
        {
            artNr: 179,
            inStock: 1,
            albumTitle: "Greatest Hits",
            artistName: "Sly and the Family Stone",
            backOrdersPossible: true,
            price: 8.45
        },
        {
            artNr: 180,
            inStock: 17,
            albumTitle: "Child Is Father to the Man",
            artistName: "Blood, Sweat and Tears",
            backOrdersPossible: false,
            price: 8.40
        },
        {
            artNr: 181,
            inStock: 5,
            albumTitle: "Seven Tears",
            artistName: "Golden Earring",
            backOrdersPossible: false,
            price: 8.47
        },
        {
            artNr: 182,
            inStock: 8,
            albumTitle: "Moon Dance",
            artistName: "Van Morrison",
            backOrdersPossible: false,
            price: 8.10
        },
        {
            artNr: 183,
            inStock: 10,
            albumTitle: "Harvest",
            artistName: "Neil Young",
            backOrdersPossible: true,
            price: 8.90
        },
        {
            artNr: 184,
            inStock: 2,
            albumTitle: "Born in the U.S.A.",
            artistName: "Bruce Springsteen",
            backOrdersPossible: false,
            price: 8.72
        },
        {
            artNr: 185,
            inStock: 15,
            albumTitle: "This Year's Model",
            artistName: "Elvis Costello",
            backOrdersPossible: true,
            price: 8.34
        },
        {
            artNr: 186,
            inStock: 17,
            albumTitle: "Odessey and Oracle",
            artistName: "The Zombies",
            backOrdersPossible: true,
            price: 8.43
        },
        {
            artNr: 187,
            inStock: 0,
            albumTitle: "The Essential Michael Jackson",
            artistName: "Michael Jackson",
            backOrdersPossible: false,
            price: 8.29
        },
        {
            artNr: 188,
            inStock: 0,
            albumTitle: "Here, My Dear",
            artistName: "Marvin Gaye",
            backOrdersPossible: true,
            price: 8.71
        },
        {
            artNr: 189,
            inStock: 0,
            albumTitle: "Greatest Hits",
            artistName: "Red Hot Chili Peppers",
            backOrdersPossible: true,
            price: 8.65
        },
        {
            artNr: 190,
            inStock: 13,
            albumTitle: "Heaven Up Here",
            artistName: "Echo and the Bunnymen",
            backOrdersPossible: false,
            price: 8.27
        },
        {
            artNr: 191,
            inStock: 0,
            albumTitle: "The Who Hits 50!",
            artistName: "The Who",
            backOrdersPossible: false,
            price: 8.30
        },
        {
            artNr: 192,
            inStock: 15,
            albumTitle: "The Paul Butterfield Blues Band",
            artistName: "The Paul Butterfield Blues Band",
            backOrdersPossible: true,
            price: 8.99
        },
        {
            artNr: 193,
            inStock: 10,
            albumTitle: "Faith",
            artistName: "George Michael",
            backOrdersPossible: false,
            price: 8.55
        },
        {
            artNr: 194,
            inStock: 6,
            albumTitle: "Armed Forces",
            artistName: "Elvis Costello and the Attractions",
            backOrdersPossible: true,
            price: 8.76
        },
        {
            artNr: 195,
            inStock: 13,
            albumTitle: "Second Hand Heart",
            artistName: "Dwight Yoakam",
            backOrdersPossible: true,
            price: 8.55
        },
        {
            artNr: 196,
            inStock: 0,
            albumTitle: "Obscured by Clouds",
            artistName: "Pink Floyd",
            backOrdersPossible: false,
            price: 8.26
        },
        {
            artNr: 197,
            inStock: 0,
            albumTitle: "The Times They Are a-Changin'",
            artistName: "Bob Dylan",
            backOrdersPossible: true,
            price: 8.27
        },
        {
            artNr: 198,
            inStock: 18,
            albumTitle: "Bridge over Troubled Water",
            artistName: "Simon & Garfunkel",
            backOrdersPossible: true,
            price: 8.90
        },
        {
            artNr: 199,
            inStock: 0,
            albumTitle: "Space Oddity",
            artistName: "David Bowie",
            backOrdersPossible: false,
            price: 8.93
        },
        {
            artNr: 200,
            inStock: 19,
            albumTitle: "Their Satanic Majesties Request",
            artistName: "The Rolling Stones",
            backOrdersPossible: false,
            price: 8.06
        }
    ];




    initAlbums(greatAlbums);


//==============================


    function initAlbums(albumsArray) {

        Albums.remove({});

        var numberAlbums = Albums.find().count();

        if (numberAlbums === 0) {

            for (i = 0; i < albumsArray.length; i++) {

                Albums.insert({
                    artNr: albumsArray[i].artNr,
                    inStock: albumsArray[i].inStock,
                    albumTitle: albumsArray[i].albumTitle,
                    artistName: albumsArray[i].artistName,
                    backOrdersPossible: albumsArray[i].backOrdersPossible,
                    price: albumsArray[i].price,
                    createdAt: new Date()
                });

            }

        }

    }

});
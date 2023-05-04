// let myData;

//   fetch("test/data.json") 
//     .then(reponse => response.json())
//     .then(data => (
//         myData = data
//     ))

    // fetch('data.json')
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     console.log(data);
    // });

// function logData(){
//     console.log(myData.Agency)
// }


// $.getJSON("data.json", function(data) {
//     console.log(data);
// });


// fetch('./data.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

// $.getJSON("data.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });


const hairs = [
  {
    "element": 201747,
    "year": 2017,
    "month_day": "April 7",
    "color": "Brown",
    "color_codes": "#211c16",
    "hair_length": "Past Chest",
    "long": 100,
    "era_name": "Default",
    "fun_fact": "This was the longest I had ever grown my hair, usually I cut it every year to shoulder-length.",
    "grave": "yes",
    "image_url": "hair_assets/2017default.JPG"
  },
  {
    "element": 2017712,
    "year": 2017,
    "month_day": "July 12",
    "color": "Blue",
    "color_codes": "#4a5a86",
    "hair_length": "At Collarbones",
    "long": 74,
    "era_name": "Middle School Blues",
    "fun_fact": "I only had this color for the summer because I didn't know I was going to Catholic school where they don't allow unnatural hair colors.",
    "grave": "yes",
    "image_url": "hair_assets/2017blue.jpg"
  },
  {
    "element": 201782,
    "year": 2017,
    "month_day": "August 2",
    "color": "Brown",
    "color_codes": "#211d1c",
    "hair_length": "At Collarbones",
    "long": 78,
    "era_name": "Blending in Brown",
    "fun_fact": "About a week before this I had just injured the whole right side of my body by running, tripping, rolling, and skidding down a rough half-concrete-half-dirt path.",
    "grave": "yes",
    "image_url": "hair_assets/2017brown.jpg"
  },
  {
    "element": 2018324,
    "year": 2018,
    "month_day": "March 24",
    "color": "Light and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(23,27,36,1) 0%, rgba(89,67,56,1) 51%)",
    "hair_length": "At Chest",
    "long": 90,
    "era_name": "Not Bodacious Brown",
    "fun_fact": "I had my birthday party with only my two best friends two months after my actual birthday. This was that.",
    "grave": "yes",
    "image_url": "hair_assets/2018longbrown.jpg"
  },
  {
    "element": 201891,
    "year": 2018,
    "month_day": "September 1",
    "color": "Light and Dark Brown",
    "color_codes": "#302c2d",
    "hair_length": "At Collarbones",
    "long": 68,
    "era_name": "Silly and Short",
    "fun_fact": "At the time, I was addicted to going to fancy stores just to try on a multitude of dresses.",
    "grave": "yes",
    "image_url": "hair_assets/2018shortdress2.jpeg"
  },
  {
    "element": 20181123,
    "year": 2018,
    "month_day": "November 23",
    "color": "Brown and Blue",
    "color_codes": "linear-gradient(180deg, rgba(82,74,63,1) 0%, rgba(90,103,136,1) 51%)",
    "hair_length": "Past Collarbones",
    "long": 75,
    "era_name": "Better in Blue",
    "fun_fact": "I had just jumped off the world's largest bungee jump right before this.",
    "grave": "yes",
    "image_url": "hair_assets/2018blue.jpg"
  },
  {
    "element": 2019315,
    "year": 2019,
    "month_day": "March 15",
    "color": "Brown and Leftover Green",
    "color_codes": "linear-gradient(180deg, rgba(82,74,63,1) 0%, rgba(171,174,147,1) 100%)",
    "hair_length": "Past Collarbones",
    "long": 80,
    "era_name": "Leftover Green",
    "fun_fact": "I didn't do anything after dying it blue and my hair was left with this weird silver green after the blue faded.",
    "grave": "yes",
    "image_url": "hair_assets/2019green.jpg"
  },
  {
    "element": 2019528,
    "year": 2019,
    "month_day": "May 28",
    "color": "Brown and Blonde",
    "color_codes": "linear-gradient(180deg, rgba(82,74,63,1) 0%, rgba(255,219,177,1) 100%)",
    "hair_length": "At Collarbones",
    "long": 70,
    "era_name": "Bombtastic Blonde",
    "fun_fact": "I am fairly certain I tried dying it pink which just zero'ed the leftover green and gave me this blonde instead. I think I also got a trim (?).",
    "grave": "yes",
    "image_url": "hair_assets/2019blonde.jpg"
  },
  {
    "element": 201964,
    "year": 2019,
    "month_day": "June 4",
    "color": "Brown and Pink",
    "color_codes": "linear-gradient(180deg, rgba(82,74,63,1) 0%, rgba(184,155,131,1) 27%, rgba(205,127,127,1) 100%)",
    "hair_length": "At Collarbones",
    "long": 70,
    "era_name": "Pretty in Pink",
    "fun_fact": "This was the last day of school sophomore year and my friends and I just wandered around the mall because we didn't have anything better to do.",
    "grave": "yes",
    "image_url": "hair_assets/2019pink.jpg"
  },
  {
    "element": 2019612,
    "year": 2019,
    "month_day": "June 12",
    "color": "Brown and Pink-ish Blonde",
    "color_codes": "linear-gradient(180deg, rgba(82,74,63,1) 0%, rgba(234,188,148,1) 39%, rgba(251,178,150,1) 100%)",
    "hair_length": "At Collarbones",
    "long": 72,
    "era_name": "Summer Pink",
    "fun_fact": "This color somehow stayed for the rest of summer break. I have no idea how.",
    "grave": "yes",
    "image_url": "hair_assets/2019pinkblonde.jpg"
  },
  {
    "element": 2019831,
    "year": 2019,
    "month_day": "August 31",
    "color": "Dark Brown, Light Brown, and Blonde",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(83,62,45,1) 39%, rgba(217,172,129,1) 100%)",
    "hair_length": "At Chest",
    "long": 90,
    "era_name": "Long Long",
    "fun_fact": "Pre haircut.",
    "grave": "",
    "image_url": "hair_assets/2019longbeforeshort.jpeg"
  },
  {
    "element": 20198312,
    "year": 2019,
    "month_day": "August 31",
    "color": "Dark Brown",
    "color_codes": "#16150f",
    "hair_length": "Pixie",
    "long": 20,
    "era_name": "Short Short",
    "fun_fact": "I was going to back out of this haircut but my aunt already made the hair appointment and I was too scared to say no at that point.",
    "grave": "yes",
    "image_url": "hair_assets/2019short.jpg"
  },
  {
    "element": 2020315,
    "year": 2020,
    "month_day": "March 15",
    "color": "Dark Brown",
    "color_codes": "#16150f",
    "hair_length": "Chin",
    "long": 36,
    "era_name": "I'm Still Growing",
    "fun_fact": "Thank god for covid letting me grow out my hair without having to face society.",
    "grave": "yes",
    "image_url": "hair_assets/2020growing.jpg"
  },
  {
    "element": 2020927,
    "year": 2020,
    "month_day": "September 27",
    "color": "Dark Brown",
    "color_codes": "#16150f",
    "hair_length": "At Collarbones",
    "long": 60,
    "era_name": "Breezy Brown",
    "fun_fact": "",
    "grave": "yes",
    "image_url": "hair_assets/2020shortfling.jpeg"
  },
  {
    "element": 20201024,
    "year": 2020,
    "month_day": "October 24",
    "color": "Blue, Teal, Green, and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(81,119,111,1) 37%, rgba(96,127,105,1) 100%)",
    "hair_length": "At Collarbones",
    "long": 68,
    "era_name": "Fall Fun",
    "fun_fact": "Growing out my hair from the pixie cut made me realize how much I missed and enjoyed my natural hair, but I also getting bored. Insert perfect solution: split dye!",
    "grave": "yes",
    "image_url": "hair_assets/2020firstblue.jpg"
  },
  {
    "element": 20201230,
    "year": 2020,
    "month_day": "December 30",
    "color": "Very Light Green and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(116,134,113,1) 35%, rgba(156,176,153,1) 100%)",
    "hair_length": "At Collarbones",
    "long": 70,
    "era_name": "Faded Christmas",
    "fun_fact": "The cat's name is Eevie and she is a toe eating gremlin.",
    "grave": "yes",
    "image_url": "hair_assets/2020fadegreen.JPG"
  },
  {
    "element": 2021116,
    "year": 2021,
    "month_day": "January 16",
    "color": "Pink, some form of Pastel Rainbow, and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(183,115,100,1) 40%, rgba(159,128,72,1) 100%)",
    "hair_length": "Past Collarbones",
    "long": 72,
    "era_name": "I See UC",
    "fun_fact": "I dyed my hair to commemorate that I was halfway done with my college applications.",
    "grave": "yes",
    "image_url": "hair_assets/2021pinkblack.jpeg"
  },
  {
    "element": 2021128,
    "year": 2021,
    "month_day": "January 28",
    "color": "Blonde and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(202,184,160,1) 100%)",
    "hair_length": "Past Collarbones",
    "long": 72,
    "era_name": "Birthday Blonde",
    "fun_fact": "I had a Cars 3 themed birthday cake to celebrate turning 18.",
    "grave": "yes",
    "image_url": "hair_assets/2021whiterainbow.JPG"
  },
  {
    "element": 2021212,
    "year": 2021,
    "month_day": "February 12",
    "color": "Purple, Red, and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(103,52,129,1) 39%, rgba(162,39,75,1) 100%)",
    "hair_length": "Past Collarbones",
    "long": 73,
    "era_name": "Contemplating Colleges",
    "fun_fact": "New color new era; I was awaiting college decision letters during this hair color.",
    "grave": "yes",
    "image_url": "hair_assets/2021redpurple.JPG"
  },
  {
    "element": 2021319,
    "year": 2021,
    "month_day": "March 19",
    "color": "Muted Rainbow and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(155,130,118,1) 20%, rgba(167,148,133,1) 24%, rgba(203,149,136,1) 36%, rgba(164,116,139,1) 60%, rgba(128,61,60,1) 100%)",
    "hair_length": "Past Collarbones",
    "long": 77,
    "era_name": "#Rejection",
    "fun_fact": "I was rejected from both of my University of California choices on that day.",
    "grave": "yes",
    "image_url": "hair_assets/2021rainbowuc.jpeg"
  },
  {
    "element": 2021321,
    "year": 2021,
    "month_day": "March 21",
    "color": "Faded Rainbow and Dark Brown",
    "color_codes": "#FFFFFF",
    "hair_length": "Past Collarbones",
    "long": 77,
    "era_name": "Weirdness",
    "fun_fact": "My hair was starting to get extra frizzy from all the deadness.",
    "grave": "",
    "image_url": "hair_assets/2021rainbow.jpg"
  },
  {
    "element": 202141,
    "year": 2021,
    "month_day": "April 1",
    "color": "Blue and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(109,131,169,1) 60%)",
    "hair_length": "Past Collarbones",
    "long": 78,
    "era_name": "Artic Fox Never Again",
    "fun_fact": "I hold a grudge against this dye for getting blue over everything WHEN DRY!",
    "grave": "yes",
    "image_url": "hair_assets/2021bluekissy.jpeg"
  },
  {
    "element": 2021412,
    "year": 2021,
    "month_day": "April 1",
    "color": "Blue and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(109,131,169,1) 60%)",
    "hair_length": "Past Collarbones",
    "long": 78,
    "era_name": "The Other Half",
    "fun_fact": "A head of hair can look very different from opposite sides.",
    "grave": "",
    "image_url": "hair_assets/2021blueside.jpeg"
  },
  {
    "element": 2021424,
    "year": 2021,
    "month_day": "April 24",
    "color": "Magenta and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(188,93,162,1) 60%)",
    "hair_length": "Past Collarbones",
    "long": 79,
    "era_name": "Making Magenta Moves",
    "fun_fact": "I dyed my hair to signifiy that I had made my college decision!",
    "grave": "yes",
    "image_url": "hair_assets/2021magenta.jpeg"
  },
  {
    "element": 2021530,
    "year": 2021,
    "month_day": "May 30",
    "color": "Colored Blond and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(45,44,36,1) 0%, rgba(202,141,121,1) 60%)",
    "hair_length": "Past Collarbones",
    "long": 79,
    "era_name": "Blustering Blonde",
    "fun_fact": "",
    "grave": "yes",
    "image_url": "hair_assets/2021pinkblonde.jpeg"
  },
  {
    "element": 2021531,
    "year": 2021,
    "month_day": "May 31",
    "color": "Red and Black",
    "color_codes": "linear-gradient(180deg, rgba(10,1,3,1) 0%, rgba(153,0,39,1) 60%)",
    "hair_length": "Past Collarbones",
    "long": 79,
    "era_name": "Graduating An Idiot",
    "fun_fact": "I decided to use black (bad decision) to cover up a accidental bleached spot on my natural side of hair. Red to match school colors.",
    "grave": "",
    "image_url": "hair_assets/2021redgown.JPG"
  },
  {
    "element": 202162,
    "year": 2021,
    "month_day": "June 2",
    "color": "Red and Black",
    "color_codes": "linear-gradient(180deg, rgba(10,1,3,1) 0%, rgba(153,0,39,1) 60%)",
    "hair_length": "Past Collarbones",
    "long": 79,
    "era_name": "Officially Not a High School Dropout",
    "fun_fact": "My first ever high school party, too bad it was after everything was over.",
    "grave": "yes",
    "image_url": "hair_assets/2021redgrad.jpeg"
  },
  {
    "element": 2021628,
    "year": 2021,
    "month_day": "June 28",
    "color": "Pink Blonde and Black",
    "color_codes": "linear-gradient(180deg, rgba(10,1,3,1) 0%, rgba(183,157,142,1) 80%)",
    "hair_length": "At Chest",
    "long": 80,
    "era_name": "...",
    "fun_fact": "We don't need to discuss this one.",
    "grave": "",
    "image_url": "hair_assets/2021pinkmaid.JPG"
  },
  {
    "element": 2021716,
    "year": 2021,
    "month_day": "July 16",
    "color": "Blonde and Black",
    "color_codes": "linear-gradient(180deg, rgba(10,1,3,1) 0%, rgba(216,203,193,1) 80%)",
    "hair_length": "At Chest",
    "long": 80,
    "era_name": "As White As Blonde Can Be",
    "fun_fact": "The red evened out the undertones of my hair super well suprisingly.",
    "grave": "yes",
    "image_url": "hair_assets/2021white.jpeg"
  },
  {
    "element": 2021818,
    "year": 2021,
    "month_day": "August 18",
    "color": "Blue and Purple",
    "color_codes": "linear-gradient(180deg, rgba(28,73,173,1) 0%, rgba(138,50,160,1) 50%)",
    "hair_length": "At Chest",
    "long": 81,
    "era_name": "⅔ of the Bi Flag",
    "fun_fact": "",
    "grave": "yes",
    "image_url": "hair_assets/2021bluepurplesnake.jpeg"
  },
  {
    "element": 2021926,
    "year": 2021,
    "month_day": "September 26",
    "color": "Blue, Purple, and Brown",
    "color_codes": "linear-gradient(180deg, rgba(28,73,173,1) 0%, rgba(123,115,106,1) 44%, rgba(138,50,160,1) 100%)",
    "hair_length": "At Chest",
    "long": 82,
    "era_name": "NYC Has Weird Water",
    "fun_fact": "Just moved to NYC and the water was washing out my dye in a weirdly different way than it had ever before!",
    "grave": "yes",
    "image_url": "hair_assets/2021purplebluegrowing.jpeg"
  },
  {
    "element": 20211010,
    "year": 2021,
    "month_day": "October 10",
    "color": "Blue, Purple, and Brown",
    "color_codes": "linear-gradient(180deg, rgba(28,73,173,1) 0%, rgba(123,115,106,1) 44%, rgba(138,50,160,1) 100%)",
    "hair_length": "At Chest",
    "long": 82,
    "era_name": "More Dye Lost",
    "fun_fact": "For some reason the NYC water seemed to be removing my dye from my roots and front strands only...",
    "grave": "",
    "image_url": "hair_assets/2021bluepurplecricket.jpg"
  },
  {
    "element": 20211013,
    "year": 2021,
    "month_day": "October 13",
    "color": "Blue",
    "color_codes": "#42505e",
    "hair_length": "At Chest",
    "long": 83,
    "era_name": "Playing the Blues",
    "fun_fact": "I loved this blue so much!! So sad it didn't stay that long.",
    "grave": "yes",
    "image_url": "hair_assets/2021bluepiano.jpg"
  },
  {
    "element": 20211110,
    "year": 2021,
    "month_day": "November 10",
    "color": "Blue Gray and Warm Green",
    "color_codes": "linear-gradient(180deg, rgba(77,92,85,1) 0%, rgba(124,118,97,1) 100%)",
    "hair_length": "At Chest",
    "long": 84,
    "era_name": "First Year Classes are the Bane of My Existence",
    "fun_fact": "Because originally my hair had different levels of pre bleaching (split dye) so whatever single color I put on my hair afterwards always faded into two different colors. And usually ended up looking different after every single shower.",
    "grave": "",
    "image_url": "hair_assets/2021bluegreenscrew.jpeg"
  },
  {
    "element": 20211118,
    "year": 2021,
    "month_day": "November 18",
    "color": "Purple",
    "color_codes": "#996884",
    "hair_length": "At Chest",
    "long": 84,
    "era_name": "Purple? More like Burple!",
    "fun_fact": "After dying my hair, the shower was clogged so (obviously) I plungered the bath drain with my roommate and out came a tea bag... and it still wouldn't drain!",
    "grave": "yes",
    "image_url": "hair_assets/2021purple.jpeg"
  },
  {
    "element": 20211119,
    "year": 2021,
    "month_day": "November 19",
    "color": "Purple and Pink-ish Orange",
    "color_codes": "#FFFFFF",
    "hair_length": "At Chest",
    "long": 84,
    "era_name": "Burple!",
    "fun_fact": "Literally the next day. Color looks different in different lighting, what can I say?",
    "grave": "",
    "image_url": "hair_assets/2021purplepink.jpeg"
  },
  {
    "element": 20211124,
    "year": 2021,
    "month_day": "November 24",
    "color": "Hot Pink",
    "color_codes": "#c31c46",
    "hair_length": "At Chest",
    "long": 85,
    "era_name": "Thanksgiving Pink",
    "fun_fact": "I ended up accidentally (mostly) matching my friend (who is pictured next)!",
    "grave": "yes",
    "image_url": "hair_assets/2021pinkmandy.jpeg"
  },
  {
    "element": 20211125,
    "year": 2021,
    "month_day": "November 25",
    "color": "Cool and Warm Pink",
    "color_codes": "#FFFFFF",
    "hair_length": "At Chest",
    "long": 85,
    "era_name": "Twinsies!",
    "fun_fact": "Another example of hair looking different after every shower and fading into two different colors.",
    "grave": "",
    "image_url": "hair_assets/2021pinkthanksgiving.jpeg"
  },
  {
    "element": 20211212,
    "year": 2021,
    "month_day": "December 12",
    "color": "Pink and Orange",
    "color_codes": "linear-gradient(180deg, rgba(232,137,141,1) 0%, rgba(235,145,99,1) 100%)",
    "hair_length": "At Chest",
    "long": 86,
    "era_name": "Cartoon Sun",
    "fun_fact": "",
    "grave": "yes",
    "image_url": "hair_assets/2021orangepink.JPEG"
  },
  {
    "element": 20211222,
    "year": 2021,
    "month_day": "December 22",
    "color": "Purple and Gray",
    "color_codes": "linear-gradient(180deg, rgba(137,105,132,1) 0%, rgba(145,120,94,1) 60%)",
    "hair_length": "At Chest",
    "long": 86,
    "era_name": "Winter Gray",
    "fun_fact": "A few days later I tried going back to get this massive Grinch but we couldn't find it anywhere. *insert sobbing*",
    "grave": "yes",
    "image_url": "hair_assets/2021purplegraygrinch.JPEG"
  },
  {
    "element": 20211228,
    "year": 2021,
    "month_day": "December 28",
    "color": "Purple and Gray",
    "color_codes": "linear-gradient(180deg, rgba(137,105,132,1) 0%, rgba(145,120,94,1) 60%)",
    "hair_length": "At Chest with an Undercut",
    "long": 86,
    "era_name": "Gay Decision",
    "fun_fact": "This is the only photo I have of me with an undercut, there are zero pictures of the final result.",
    "grave": "yes",
    "image_url": "hair_assets/2021undercut.jpeg"
  },
  {
    "element": 20211231,
    "year": 2021,
    "month_day": "December 31",
    "color": "Magenta",
    "color_codes": "linear-gradient(180deg, rgba(188,78,150,1) 0%, rgba(217,113,145,1) 60%)",
    "hair_length": "At Chest with an Undercut",
    "long": 86,
    "era_name": "New Year New Colors",
    "fun_fact": "Magenta always plagues me; I never want it yet somehow I always achieve it.",
    "grave": "yes",
    "image_url": "hair_assets/2021pinkpurplemandy.jpeg"
  },
  {
    "element": 2022113,
    "year": 2022,
    "month_day": "January 13",
    "color": "Blonde and Pink",
    "color_codes": "linear-gradient(180deg, rgba(188,124,71,1) 0%, rgba(180,78,99,1) 60%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 52,
    "era_name": "Cut It to Bits",
    "fun_fact": "My hair was so dead (bubblegum if you know what that means) I finally gave in and decided to hack it off.",
    "grave": "yes",
    "image_url": "hair_assets/2022shortpink.jpeg"
  },
  {
    "element": 202224,
    "year": 2022,
    "month_day": "February 4",
    "color": "Blonde",
    "color_codes": "linear-gradient(180deg, rgba(32,0,0,1) 0%, rgba(229,164,105,1) 40%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 53,
    "era_name": "Boring Blonde",
    "fun_fact": "My roommate decided to transfer and completely move out without telling any of us in the suite and was planning to just disappear. I only found out because I got back the night before she left forever.",
    "grave": "yes",
    "image_url": "hair_assets/2022blondeshort.jpg"
  },
  {
    "element": 202229,
    "year": 2022,
    "month_day": "February 9",
    "color": "Blue-ish Purple",
    "color_codes": "linear-gradient(180deg, rgba(32,0,0,1) 0%, rgba(70,68,125,1) 20%, rgba(80,51,71,1) 65%, rgba(43,32,49,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 55,
    "era_name": "Blue and Purple Under Light",
    "fun_fact": "The purple dye I bought turned out blue and did not look good, so I put red dye over everything and came out with this dark blue-ish purple.",
    "grave": "",
    "image_url": "hair_assets/2022purple.jpg"
  },
  {
    "element": 2022292,
    "year": 2022,
    "month_day": "February 9",
    "color": "Blue-ish Purple",
    "color_codes": "linear-gradient(180deg, rgba(32,0,0,1) 0%, rgba(70,68,125,1) 20%, rgba(80,51,71,1) 65%, rgba(43,32,49,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 55,
    "era_name": "Dark Purple Overall",
    "fun_fact": "This hair looked very different depending on lighting and how close you were to it.",
    "grave": "",
    "image_url": "hair_assets/2022purplehearts.JPG"
  },
  {
    "element": 2022293,
    "year": 2022,
    "month_day": "February 11",
    "color": "Blue-ish Purple",
    "color_codes": "linear-gradient(180deg, rgba(32,0,0,1) 0%, rgba(70,68,125,1) 20%, rgba(80,51,71,1) 65%, rgba(43,32,49,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 55,
    "era_name": "But Somehow Blue in the Bathroom",
    "fun_fact": "It looked blue in artificial, cold lighting.",
    "grave": "",
    "image_url": "hair_assets/2022darkbluemirror.jpeg"
  },
  {
    "element": 2022294,
    "year": 2022,
    "month_day": "February 11",
    "color": "Blue-ish Purple",
    "color_codes": "linear-gradient(180deg, rgba(32,0,0,1) 0%, rgba(70,68,125,1) 20%, rgba(80,51,71,1) 65%, rgba(43,32,49,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 55,
    "era_name": "Plain Purple",
    "fun_fact": "But in this natural lighting it looked much more purple than blue. (This and the previous three photos were all two days apart.)",
    "grave": "yes",
    "image_url": "hair_assets/2022purple.jpeg"
  },
  {
    "element": 2022310,
    "year": 2022,
    "month_day": "March 10",
    "color": "Burgundy and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(184,46,75,1) 30%, rgba(120,58,83,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 58,
    "era_name": "Red Wine",
    "fun_fact": "I put a nice, deep red over everything again, which washed off slowly with every shower and made each day look very different.",
    "grave": "yes",
    "image_url": "hair_assets/2022burgandy.jpeg"
  },
  {
    "element": 2022314,
    "year": 2022,
    "month_day": "March 14",
    "color": "Deep Purple and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(141,77,105,1) 30%, rgba(63,40,60,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 58,
    "era_name": "Plum Purple",
    "fun_fact": "I watched the Batman movie. Cinematically? Very nice. Plot-wise? Awful.",
    "grave": "yes",
    "image_url": "hair_assets/2022purplespring.jpeg"
  },
  {
    "element": 2022411,
    "year": 2022,
    "month_day": "April 11",
    "color": "Purple, Blue, Green, and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(173,183,146,1) 26%, rgba(91,80,100,1) 51%, rgba(126,87,117,1) 100%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 60,
    "era_name": "½ of the Color Wheel",
    "fun_fact": "At this point color theory and my knowledge of hair dye was being thrown out the window because nothing was doing what it was supposed to.",
    "grave": "yes",
    "image_url": "hair_assets/2022greenbluepurple.jpeg"
  },
  {
    "element": 2022417,
    "year": 2022,
    "month_day": "April 17",
    "color": "Weird Rainbow Thing and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(172,82,65,1) 26%, rgba(169,162,161,1) 41%, rgba(143,67,80,1) 60%, rgba(76,47,63,1) 70%, rgba(126,87,117,1) 100%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 61,
    "era_name": "What Even is This?",
    "fun_fact": "I was tired of blue and wanted to change the color but literally every stand of hair become a different color!",
    "grave": "yes",
    "image_url": "hair_assets/2022rainbow.JPG"
  },
  {
    "element": 2022427,
    "year": 2022,
    "month_day": "April 27",
    "color": "Purple, Orange, Red, and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(204,152,163,1) 19%, rgba(211,109,140,1) 26%, rgba(132,74,111,1) 35%, rgba(212,123,122,1) 50%, rgba(176,72,72,1) 90%)",
    "hair_length": "Shoulder-Length with an Undercut",
    "long": 62,
    "era_name": "Not Fire",
    "fun_fact": "I was constantly tired of whatever color my hair would be and just kept dying week after week.",
    "grave": "yes",
    "image_url": "hair_assets/2022redpurple.jpg"
  },
  {
    "element": 202258,
    "year": 2022,
    "month_day": "May 8",
    "color": "Purple, Green, and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(197,203,175,1) 20%, rgba(147,112,149,1) 40%, rgba(168,159,179,1) 77%)",
    "hair_length": "Past Shoulders with an Undercut",
    "long": 63,
    "era_name": "Moving",
    "fun_fact": "I opened a storage locker for me and my flatmate on this day so we could keep our stuff somewhere before we moved.",
    "grave": "yes",
    "image_url": "hair_assets/2022purplemove.jpeg"
  },
  {
    "element": 2022610,
    "year": 2022,
    "month_day": "June 10",
    "color": "Green Silver-ish Blue and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(158,164,139,1) 33%, rgba(114,125,118,1) 77%)",
    "hair_length": "Past Shoulders with an Undercut",
    "long": 64,
    "era_name": "Moved In",
    "fun_fact": "I would've been lost without my mom helping me unpack and move in.",
    "grave": "yes",
    "image_url": "hair_assets/2022silvergreen.JPG"
  },
  {
    "element": 2022619,
    "year": 2022,
    "month_day": "June 19",
    "color": "Magenta and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(234,69,174,1) 77%)",
    "hair_length": "Past Shoulders with an Undercut",
    "long": 64,
    "era_name": "Mangled Magenta",
    "fun_fact": "The dye said 'Hot Hot Pink'! Tell me why it came out magenta?!!??? I dispise that color!!!!",
    "grave": "yes",
    "image_url": "hair_assets/2022magenta.jpeg"
  },
  {
    "element": 202276,
    "year": 2022,
    "month_day": "July 6",
    "color": "Red and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(147,25,46,1) 50%)",
    "hair_length": "Past Collarbones with an Undercut",
    "long": 67,
    "era_name": "Blood Spilled",
    "fun_fact": "I had covid and wanted to make myself feel better.",
    "grave": "yes",
    "image_url": "hair_assets/2022redbed.JPG"
  },
  {
    "element": 2022727,
    "year": 2022,
    "month_day": "July 27",
    "color": "Muted Purple-ish Pink and Dark Brown",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(157,99,104,1) 50%)",
    "hair_length": "Past Collarbones with an Undercut",
    "long": 70,
    "era_name": "Battling Boredom",
    "fun_fact": "",
    "grave": "yes",
    "image_url": "hair_assets/2022dullpink.jpeg"
  },
  {
    "element": 2022730,
    "year": 2022,
    "month_day": "July 30",
    "color": "Dark Brown",
    "color_codes": "#201911",
    "hair_length": "Pixie",
    "long": 23,
    "era_name": "Funky Fresh",
    "fun_fact": "My hair was super dead and I didn't want to keep growing out my undercut, so I cut it all off.",
    "grave": "yes",
    "image_url": "hair_assets/2022shortwet.jpeg"
  },
  {
    "element": 2022731,
    "year": 2022,
    "month_day": "July 31",
    "color": "Dark Brown",
    "color_codes": "#FFFFFF",
    "hair_length": "Pixie",
    "long": 23,
    "era_name": "Femboy",
    "fun_fact": "I had my friend cut it (her first time cutting hair this short) and surprisingly I had no nerves or stress about it going poorly. The only thoughts in my head were 'Whatever, nothing matters anyway :)'",
    "grave": "",
    "image_url": "hair_assets/2022shortfemboy.jpeg"
  },
  {
    "element": 202285,
    "year": 2022,
    "month_day": "August 5",
    "color": "Dark Brown and Red",
    "color_codes": "linear-gradient(180deg, rgba(48,38,29,1) 0%, rgba(201,65,66,1) 100%)",
    "hair_length": "Pixie",
    "long": 23,
    "era_name": "Tinged with Hell",
    "fun_fact": "I was bored and saw that I still had some highlights I could dye. So I did.",
    "grave": "yes",
    "image_url": "hair_assets/2022redcarmandy.jpeg"
  },
  {
    "element": 202298,
    "year": 2022,
    "month_day": "September 8",
    "color": "Bleach",
    "color_codes": "#FFFFFF",
    "hair_length": "Pixie",
    "long": 24,
    "era_name": "Bored and Bleached",
    "fun_fact": "Process shot of bleaching my hair.",
    "grave": "",
    "image_url": "hair_assets/2022bleach.jpeg"
  },
  {
    "element": 2022101,
    "year": 2022,
    "month_day": "October 1",
    "color": "Blue",
    "color_codes": "#275969",
    "hair_length": "Pixie",
    "long": 24,
    "era_name": "Blue Tie Event",
    "fun_fact": "I found the tie that matched my hair a few days before that event.",
    "grave": "yes",
    "image_url": "hair_assets/2022bluewedding.jpeg"
  },
  {
    "element": 20221020,
    "year": 2022,
    "month_day": "October 20",
    "color": "Teal",
    "color_codes": "#5e9287",
    "hair_length": "Pixie",
    "long": 24,
    "era_name": "Clowning Around",
    "fun_fact": "I heavily procrasted my History of Design midterm that week.",
    "grave": "yes",
    "image_url": "hair_assets/2022fadedblueclown.jpeg"
  },
  {
    "element": 20221031,
    "year": 2022,
    "month_day": "October 31",
    "color": "Red",
    "color_codes": "#7a0007",
    "hair_length": "Pixie",
    "long": 25,
    "era_name": "Racecar Red",
    "fun_fact": "I dyed my hair this color partly to match my Lightning McQueen costume for Halloween.",
    "grave": "yes",
    "image_url": "hair_assets/2022redcars.jpeg"
  },
  {
    "element": 20221113,
    "year": 2022,
    "month_day": "November 13",
    "color": "Dusty Green and Salmon Red",
    "color_codes": "linear-gradient(180deg, rgba(220,89,79,1) 0%, rgba(168,171,145,1) 33%)",
    "hair_length": "Pixie",
    "long": 24,
    "era_name": "Fungal Growth",
    "fun_fact": "I was trying to get the dye out as fast as possible so I could dye it pink in time for Thanksgiving.",
    "grave": "yes",
    "image_url": "hair_assets/2022change.jpeg"
  },
  {
    "element": 20221119,
    "year": 2022,
    "month_day": "November 19",
    "color": "Dusty Orange-ish Pink",
    "color_codes": "#d36453",
    "hair_length": "Pixie",
    "long": 24,
    "era_name": "Sunset Pink",
    "fun_fact": "This first round of pink came out very muted and absolutely peach-toned.",
    "grave": "yes",
    "image_url": "hair_assets/2022orangepink.JPEG"
  },
  {
    "element": 20221123,
    "year": 2022,
    "month_day": "November 23",
    "color": "Red-er Pink",
    "color_codes": "#d24b54",
    "hair_length": "Pixie",
    "long": 24,
    "era_name": "Thanksgiving Pink Part II",
    "fun_fact": "Tried to match my friend on purpose this time.",
    "grave": "yes",
    "image_url": "hair_assets/2022pinkjack.jpeg"
  },
  {
    "element": 2022129,
    "year": 2022,
    "month_day": "December 9",
    "color": "Faded Pink-ish Orange",
    "color_codes": "#dd8a72",
    "hair_length": "Pixie",
    "long": 26,
    "era_name": "Sickly Orange",
    "fun_fact": "",
    "grave": "yes",
    "image_url": "hair_assets/2022fadepink.jpeg"
  },
  {
    "element": 202112,
    "year": 2023,
    "month_day": "January 2",
    "color": "Green-ish Blue",
    "color_codes": "#2f94a8",
    "hair_length": "Pixie",
    "long": 26,
    "era_name": "Back to Blue",
    "fun_fact": "I missed being blue.",
    "grave": "yes",
    "image_url": "hair_assets/2023bluelondon.PNG"
  },
  {
    "element": 2023116,
    "year": 2023,
    "month_day": "January 16",
    "color": "Light Green and Teal",
    "color_codes": "linear-gradient(180deg, rgba(76,129,137,1) 0%, rgba(175,205,192,1) 33%)",
    "hair_length": "Pixie",
    "long": 27,
    "era_name": "Breaking Blue",
    "fun_fact": "I celebrated with my birthday cake a week before my birthday so I would have enough time to enjoy eating it.",
    "grave": "yes",
    "image_url": "hair_assets/2023fadedblue.jpeg"
  },
  {
    "element": 2023120,
    "year": 2023,
    "month_day": "January 20",
    "color": "Blue",
    "color_codes": "#18607d",
    "hair_length": "Pixie",
    "long": 27,
    "era_name": "Birthday Blues",
    "fun_fact": "I refreshed the color so it would look nice for these exact photos.",
    "grave": "yes",
    "image_url": "hair_assets/2023bluebirthday.jpeg"
  },
  {
    "element": 2023218,
    "year": 2023,
    "month_day": "February 18",
    "color": "Blue-ish Green",
    "color_codes": "linear-gradient(180deg, rgba(171,184,153,1) 0%, rgba(89,134,124,1) 50%)",
    "hair_length": "Pixie",
    "long": 28,
    "era_name": "Sea Foam",
    "fun_fact": "My friend and I tried playing FNAF on that day. We couldn't make it past the second night out of fear.",
    "grave": "yes",
    "image_url": "hair_assets/2023fadeaqua.jpeg"
  },
  {
    "element": 2023228,
    "year": 2023,
    "month_day": "February 28",
    "color": "Purple-ish Blue",
    "color_codes": "#3a558b",
    "hair_length": "Pixie",
    "long": 25,
    "era_name": "True Blue",
    "fun_fact": "I tried to do purple, but again it just defaulted to blue.",
    "grave": "yes",
    "image_url": "hair_assets/2023bluepurple.jpeg"
  },
  {
    "element": 2023311,
    "year": 2023,
    "month_day": "March 11",
    "color": "Purple and Dark Blue",
    "color_codes": "linear-gradient(180deg, rgba(48,38,72,1) 0%, rgba(133,81,124,1) 50%)",
    "hair_length": "Pixie",
    "long": 25,
    "era_name": "Pitch Purple",
    "fun_fact": "It's giving.",
    "grave": "yes",
    "image_url": "hair_assets/2023purple.jpeg"
  }
]
  
  const hairsList = document.getElementById('hairs-list')
  
  function renderHair(hair) {
    // Create .hair element
    const hairElement = document.createElement('div')
  
    hairElement.classList.add('hair')
  
    //console.log(hairElement)
    //console.log(hair.cover_image_url)
  
    // Create the inner HTML content
    const hairHTML = `
    <div class="split">   
      <span class="image" id="${hair.element}" name="${hair.element}">
        <img src="${hair.image_url}">
      </span>
      <span class="text">
        <ul>
          <div class="RIP"
          <li> Rest In Peace </li>
          </div>
          <div class="titledate">
          <li>${hair.era_name}</li>
          <li>${hair.year} ${hair.month_day}</li>
          </div>
          <br>
          <li>Color: ${hair.color}</li>
          <li>Length: ${hair.hair_length}</li>
          <br>
          <li>${hair.fun_fact}</li>
          <br>
        </ul>
      </span>
    </div>
    `
  
    // Set the inner HTML content of the hairElement
    hairElement.innerHTML = hairHTML
  
    // Add to the list #hairs-list
    hairsList.appendChild(hairElement)
  }
  
  // Start App! 
  // Only run on obituary
  if (hairsList) {
    hairs.forEach(function(hair) {
      // if (hair.year_released < 2000) {
        renderHair(hair)
      // }
    })
  
    // hair.color = 'Brown, blonde'
    // const buttonColor = 'brown'
    // if hair.color.toLowerCase().includes(buttonColor)


    const lis = document.querySelectorAll('.submenu li')

    //color filter
    for (let i = 0; i < lis.length; i++) {
      lis[i].addEventListener("click", function(e) {
        const li = e.target
        const buttonColor = li.innerText.toLowerCase()

        // clear out list
        hairsList.innerHTML = ''

        hairs.forEach(function(hair) {
          if (hair.color.toLowerCase().includes(buttonColor)) {
            renderHair(hair)
          }
          else if (buttonColor == 'all') {
            renderHair(hair)
          }
          //length
          else if (hair.hair_length.toLowerCase().includes(buttonColor)) {
            renderHair(hair)
          }
          else if (buttonColor == 'all') {
            renderHair(hair)
          }
        })  
      });
    }
  }


  const graveList = document.getElementById('grave-list')
  
  function renderGraveyard(hair) {
    const graveElement = document.createElement('div')

    // Add a class to this element so we can style it
    graveElement.classList.add('grave')

    const graveHTML = `
    
    <a href="http://airair21.github.io/tem/obituary.html#${hair.element}">
      <div class="headstone">
        <img src="${hair.image_url}">
      </div>
      <div class="grain"> 
        <div id="${hair.element}" class="blood"></div>
      </div>
    </a>
    `

    graveElement.innerHTML = graveHTML
    graveList.appendChild(graveElement)

    // not yet
    // You can multiply this length by another number to get the right number of pixels
    // i.e. `${hair.long * 3}px`
    document.getElementById(hair.element).style.height = `calc(${hair.long} * 4.6px)`;
    document.getElementById(hair.element).style.setProperty('--hover-color', hair.color_codes);
  }

  // Only run on graveyard page
  // if (graveList) {
  //   hairs.forEach(function(hair) {
  //      if (hair.grave === 'yes') {
  //       renderGraveyard(hair)
  //      }
  //   })

  // }




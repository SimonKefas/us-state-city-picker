// -------------------------------------
// 1) Our state->cities dataset (same as before)
// -------------------------------------
const stateCityList = {
  "Alabama": [
    "Alexander City","Andalusia","Anniston","Athens","Atmore","Auburn","Bessemer","Birmingham",
    "Chickasaw","Clanton","Cullman","Decatur","Demopolis","Dothan","Enterprise","Eufaula","Florence",
    "Fort Payne","Gadsden","Greenville","Guntersville","Huntsville","Jasper","Marion","Mobile",
    "Montgomery","Opelika","Ozark","Phenix City","Prichard","Scottsboro","Selma","Sheffield",
    "Sylacauga","Talladega","Troy","Tuscaloosa","Tuscumbia","Tuskegee"
  ],
  "Alaska": [
    "Anchorage","Cordova","Fairbanks","Haines","Homer","Juneau","Ketchikan","Kodiak","Kotzebue","Nome",
    "Palmer","Seward","Sitka","Skagway","Valdez"
  ],
  "Arizona": [
    "Ajo","Avondale","Bisbee","Casa Grande","Chandler","Clifton","Douglas","Flagstaff","Florence",
    "Gila Bend","Glendale","Globe","Kingman","Lake Havasu City","Mesa","Nogales","Oraibi","Phoenix",
    "Prescott","Scottsdale","Sierra Vista","Tempe","Tombstone","Tucson","Walpi","Window Rock","Winslow","Yuma"
  ],
  "Arkansas": [
    "Arkadelphia","Arkansas Post","Batesville","Benton","Blytheville","Camden","Conway","Crossett",
    "El Dorado","Fayetteville","Forrest City","Fort Smith","Harrison","Helena","Hope","Hot Springs",
    "Jacksonville","Jonesboro","Little Rock","Magnolia","Morrilton","Newport","North Little Rock","Osceola",
    "Pine Bluff","Rogers","Searcy","Stuttgart","Van Buren","West Memphis"
  ],
  "California": [
    "Alameda","Alhambra","Anaheim","Antioch","Arcadia","Bakersfield","Barstow","Belmont","Berkeley",
    "Beverly Hills","Brea","Buena Park","Burbank","Calexico","Calistoga","Carlsbad","Carmel","Chico",
    "Chula Vista","Claremont","Compton","Concord","Corona","Coronado","Costa Mesa","Culver City","Daly City",
    "Davis","Downey","El Centro","El Cerrito","El Monte","Escondido","Eureka","Fairfield","Fontana",
    "Fremont","Fresno","Fullerton","Garden Grove","Glendale","Hayward","Hollywood","Huntington Beach","Indio",
    "Inglewood","Irvine","La Habra","Laguna Beach","Lancaster","Livermore","Lodi","Lompoc","Long Beach",
    "Los Angeles","Malibu","Martinez","Marysville","Menlo Park","Merced","Modesto","Monterey","Mountain View",
    "Napa","Needles","Newport Beach","Norwalk","Novato","Oakland","Oceanside","Ojai","Ontario","Orange",
    "Oroville","Oxnard","Pacific Grove","Palm Springs","Palmdale","Palo Alto","Pasadena","Petaluma","Pomona",
    "Port Hueneme","Rancho Cucamonga","Red Bluff","Redding","Redlands","Redondo Beach","Redwood City","Richmond",
    "Riverside","Roseville","Sacramento","Salinas","San Bernardino","San Clemente","San Diego","San Fernando",
    "San Francisco","San Gabriel","San Jose","San Juan Capistrano","San Leandro","San Luis Obispo","San Marino",
    "San Mateo","San Pedro","San Rafael","San Simeon","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita",
    "Santa Cruz","Santa Monica","Santa Rosa","Sausalito","Simi Valley","Sonoma","South San Francisco","Stockton",
    "Sunnyvale","Susanville","Thousand Oaks","Torrance","Turlock","Ukiah","Vallejo","Ventura","Victorville",
    "Visalia","Walnut Creek","Watts","West Covina","Whittier","Woodland","Yorba Linda","Yuba City"
  ],
  "Colorado": [
    "Alamosa","Aspen","Aurora","Boulder","Breckenridge","Brighton","Canon City","Central City","Climax",
    "Colorado Springs","Cortez","Cripple Creek","Denver","Durango","Englewood","Estes Park","Fort Collins",
    "Fort Morgan","Georgetown","Glenwood Springs","Golden","Grand Junction","Greeley","Gunnison","La Junta",
    "Leadville","Littleton","Longmont","Loveland","Montrose","Ouray","Pagosa Springs","Pueblo","Silverton",
    "Steamboat Springs","Sterling","Telluride","Trinidad","Vail","Walsenburg","Westminster"
  ],
  "Connecticut": [
    "Ansonia","Berlin","Bloomfield","Branford","Bridgeport","Bristol","Coventry","Danbury","Darien","Derby",
    "East Hartford","East Haven","Enfield","Fairfield","Farmington","Greenwich","Groton","Guilford","Hamden",
    "Hartford","Lebanon","Litchfield","Manchester","Mansfield","Meriden","Middletown","Milford","Mystic",
    "Naugatuck","New Britain","New Haven","New London","North Haven","Norwalk","Norwich","Old Saybrook","Orange",
    "Seymour","Shelton","Simsbury","Southington","Stamford","Stonington","Stratford","Torrington","Wallingford",
    "Waterbury","Waterford","Watertown","West Hartford","West Haven","Westport","Wethersfield","Willimantic",
    "Windham","Windsor","Windsor Locks","Winsted"
  ],
  "Delaware": [
    "Dover","Lewes","Milford","New Castle","Newark","Smyrna","Wilmington"
  ],
  "Florida": [
    "Apalachicola","Bartow","Belle Glade","Boca Raton","Bradenton","Cape Coral","Clearwater","Cocoa Beach",
    "Cocoa-Rockledge","Coral Gables","Daytona Beach","De Land","Deerfield Beach","Delray Beach","Fernandina Beach",
    "Fort Lauderdale","Fort Myers","Fort Pierce","Fort Walton Beach","Gainesville","Hallandale Beach","Hialeah",
    "Hollywood","Homestead","Jacksonville","Key West","Lake City","Lake Wales","Lakeland","Largo","Melbourne",
    "Miami","Miami Beach","Naples","New Smyrna Beach","Ocala","Orlando","Ormond Beach","Palatka","Palm Bay",
    "Palm Beach","Panama City","Pensacola","Pompano Beach","Saint Augustine","Saint Petersburg","Sanford","Sarasota",
    "Sebring","Tallahassee","Tampa","Tarpon Springs","Titusville","Venice","West Palm Beach","White Springs",
    "Winter Haven","Winter Park"
  ],
  "Georgia": [
    "Albany","Americus","Andersonville","Athens","Atlanta","Augusta","Bainbridge","Blairsville","Brunswick",
    "Calhoun","Carrollton","Columbus","Dahlonega","Dalton","Darien","Decatur","Douglas","East Point","Fitzgerald",
    "Fort Valley","Gainesville","La Grange","Macon","Marietta","Milledgeville","Plains","Rome","Savannah","Toccoa",
    "Valdosta","Warm Springs","Warner Robins","Washington","Waycross"
  ],
  "Hawaii": [
    "Hanalei","Hilo","Honaunau","Honolulu","Kahului","Kaneohe","Kapaa","Kawaihae","Lahaina","Laie","Wahiawa",
    "Wailuku","Waimea"
  ],
  "Idaho": [
    "Blackfoot","Boise","Bonners Ferry","Caldwell","Coeur d’Alene","Idaho City","Idaho Falls","Kellogg","Lewiston",
    "Moscow","Nampa","Pocatello","Priest River","Rexburg","Sun Valley","Twin Falls"
  ],
  "Illinois": [
    "Alton","Arlington Heights","Arthur","Aurora","Belleville","Belvidere","Bloomington","Brookfield","Cahokia",
    "Cairo","Calumet City","Canton","Carbondale","Carlinville","Carthage","Centralia","Champaign","Charleston",
    "Chester","Chicago","Chicago Heights","Cicero","Collinsville","Danville","Decatur","DeKalb","Des Plaines",
    "Dixon","East Moline","East Saint Louis","Effingham","Elgin","Elmhurst","Evanston","Freeport","Galena",
    "Galesburg","Glen Ellyn","Glenview","Granite City","Harrisburg","Herrin","Highland Park","Jacksonville",
    "Joliet","Kankakee","Kaskaskia","Kewanee","La Salle","Lake Forest","Libertyville","Lincoln","Lisle","Lombard",
    "Macomb","Mattoon","Moline","Monmouth","Mount Vernon","Mundelein","Naperville","Nauvoo","Normal","North Chicago",
    "Oak Park","Oregon","Ottawa","Palatine","Park Forest","Park Ridge","Pekin","Peoria","Petersburg","Pontiac",
    "Quincy","Rantoul","River Forest","Rock Island","Rockford","Salem","Shawneetown","Skokie","South Holland",
    "Springfield","Streator","Summit","Urbana","Vandalia","Virden","Waukegan","Wheaton","Wilmette","Winnetka",
    "Wood River","Zion"
  ],
  "Indiana": [
    "Anderson","Bedford","Bloomington","Columbus","Connersville","Corydon","Crawfordsville","East Chicago",
    "Elkhart","Elwood","Evansville","Fort Wayne","French Lick","Gary","Geneva","Goshen","Greenfield","Hammond",
    "Hobart","Huntington","Indianapolis","Jeffersonville","Kokomo","Lafayette","Madison","Marion","Michigan City",
    "Mishawaka","Muncie","Nappanee","Nashville","New Albany","New Castle","New Harmony","Peru","Plymouth","Richmond",
    "Santa Claus","Shelbyville","South Bend","Terre Haute","Valparaiso","Vincennes","Wabash","West Lafayette"
  ],
  "Iowa": [
    "Amana Colonies","Ames","Boone","Burlington","Cedar Falls","Cedar Rapids","Charles City","Cherokee","Clinton",
    "Council Bluffs","Davenport","Des Moines","Dubuque","Estherville","Fairfield","Fort Dodge","Grinnell","Indianola",
    "Iowa City","Keokuk","Mason City","Mount Pleasant","Muscatine","Newton","Oskaloosa","Ottumwa","Sioux City",
    "Waterloo","Webster City","West Des Moines"
  ],
  "Kansas": [
    "Abilene","Arkansas City","Atchison","Chanute","Coffeyville","Council Grove","Dodge City","Emporia","Fort Scott",
    "Garden City","Great Bend","Hays","Hutchinson","Independence","Junction City","Kansas City","Lawrence",
    "Leavenworth","Liberal","Manhattan","McPherson","Medicine Lodge","Newton","Olathe","Osawatomie","Ottawa",
    "Overland Park","Pittsburg","Salina","Shawnee","Smith Center","Topeka","Wichita"
  ],
  "Kentucky": [
    "Ashland","Barbourville","Bardstown","Berea","Boonesborough","Bowling Green","Campbellsville","Covington",
    "Danville","Elizabethtown","Frankfort","Harlan","Harrodsburg","Hazard","Henderson","Hodgenville","Hopkinsville",
    "Lexington","Louisville","Mayfield","Maysville","Middlesboro","Newport","Owensboro","Paducah","Paris","Richmond"
  ],
  "Louisiana": [
    "Abbeville","Alexandria","Bastrop","Baton Rouge","Bogalusa","Bossier City","Gretna","Houma","Lafayette",
    "Lake Charles","Monroe","Morgan City","Natchitoches","New Iberia","New Orleans","Opelousas","Ruston",
    "Saint Martinville","Shreveport","Thibodaux"
  ],
  "Maine": [
    "Auburn","Augusta","Bangor","Bar Harbor","Bath","Belfast","Biddeford","Boothbay Harbor","Brunswick","Calais",
    "Caribou","Castine","Eastport","Ellsworth","Farmington","Fort Kent","Gardiner","Houlton","Kennebunkport",
    "Kittery","Lewiston","Lubec","Machias","Orono","Portland","Presque Isle","Rockland","Rumford","Saco","Scarborough",
    "Waterville","York"
  ],
  "Maryland": [
    "Aberdeen","Annapolis","Baltimore","Bethesda-Chevy Chase","Bowie","Cambridge","Catonsville","College Park",
    "Columbia","Cumberland","Easton","Elkton","Emmitsburg","Frederick","Greenbelt","Hagerstown","Hyattsville",
    "Laurel","Oakland","Ocean City","Rockville","Saint Marys City","Salisbury","Silver Spring","Takoma Park",
    "Towson","Westminster"
  ],
  "Massachusetts": [
    "Abington","Adams","Amesbury","Amherst","Andover","Arlington","Athol","Attleboro","Barnstable","Bedford",
    "Beverly","Boston","Bourne","Braintree","Brockton","Brookline","Cambridge","Canton","Charlestown","Chelmsford",
    "Chelsea","Chicopee","Clinton","Cohasset","Concord","Danvers","Dartmouth","Dedham","Dennis","Duxbury","Eastham",
    "Edgartown","Everett","Fairhaven","Fall River","Falmouth","Fitchburg","Framingham","Gloucester","Great Barrington",
    "Greenfield","Groton","Harwich","Haverhill","Hingham","Holyoke","Hyannis","Ipswich","Lawrence","Lenox",
    "Leominster","Lexington","Lowell","Ludlow","Lynn","Malden","Marblehead","Marlborough","Medford","Milton","Nahant",
    "Natick","New Bedford","Newburyport","Newton","North Adams","Northampton","Norton","Norwood","Peabody",
    "Pittsfield","Plymouth","Provincetown","Quincy","Randolph","Revere","Salem","Sandwich","Saugus","Somerville",
    "South Hadley","Springfield","Stockbridge","Stoughton","Sturbridge","Sudbury","Taunton","Tewksbury","Truro",
    "Watertown","Webster","Wellesley","Wellfleet","West Bridgewater","West Springfield","Westfield","Weymouth",
    "Whitman","Williamstown","Woburn","Woods Hole","Worcester"
  ],
  "Michigan": [
    "Adrian","Alma","Ann Arbor","Battle Creek","Bay City","Benton Harbor","Bloomfield Hills","Cadillac","Charlevoix",
    "Cheboygan","Dearborn","Detroit","East Lansing","Eastpointe","Ecorse","Escanaba","Flint","Grand Haven",
    "Grand Rapids","Grayling","Grosse Pointe","Hancock","Highland Park","Holland","Houghton","Interlochen",
    "Iron Mountain","Ironwood","Ishpeming","Jackson","Kalamazoo","Lansing","Livonia","Ludington","Mackinaw City",
    "Manistee","Marquette","Menominee","Midland","Monroe","Mount Clemens","Mount Pleasant","Muskegon","Niles",
    "Petoskey","Pontiac","Port Huron","Royal Oak","Saginaw","Saint Ignace","Saint Joseph","Sault Sainte Marie",
    "Traverse City","Trenton","Warren","Wyandotte","Ypsilanti"
  ],
  "Minnesota": [
    "Albert Lea","Alexandria","Austin","Bemidji","Bloomington","Brainerd","Crookston","Duluth","Ely","Eveleth",
    "Faribault","Fergus Falls","Hastings","Hibbing","International Falls","Little Falls","Mankato","Minneapolis",
    "Moorhead","New Ulm","Northfield","Owatonna","Pipestone","Red Wing","Rochester","Saint Cloud","Saint Paul",
    "Sauk Centre","South Saint Paul","Stillwater","Virginia","Willmar","Winona"
  ],
  "Mississippi": [
    "Bay Saint Louis","Biloxi","Canton","Clarksdale","Columbia","Columbus","Corinth","Greenville","Greenwood",
    "Grenada","Gulfport","Hattiesburg","Holly Springs","Jackson","Laurel","Meridian","Natchez","Ocean Springs",
    "Oxford","Pascagoula","Pass Christian","Philadelphia","Port Gibson","Starkville","Tupelo","Vicksburg",
    "West Point","Yazoo City"
  ],
  "Missouri": [
    "Boonville","Branson","Cape Girardeau","Carthage","Chillicothe","Clayton","Columbia","Excelsior Springs","Ferguson",
    "Florissant","Fulton","Hannibal","Independence","Jefferson City","Joplin","Kansas City","Kirksville","Lamar",
    "Lebanon","Lexington","Maryville","Mexico","Monett","Neosho","New Madrid","Rolla","Saint Charles","Saint Joseph",
    "Saint Louis","Sainte Genevieve","Salem","Sedalia","Springfield","Warrensburg","West Plains"
  ],
  "Montana": [
    "Anaconda","Billings","Bozeman","Butte","Dillon","Fort Benton","Glendive","Great Falls","Havre","Helena",
    "Kalispell","Lewistown","Livingston","Miles City","Missoula","Virginia City"
  ],
  "Nebraska": [
    "Beatrice","Bellevue","Boys Town","Chadron","Columbus","Fremont","Grand Island","Hastings","Kearney","Lincoln",
    "McCook","Minden","Nebraska City","Norfolk","North Platte","Omaha","Plattsmouth","Red Cloud","Sidney"
  ],
  "Nevada": [
    "Boulder City","Carson City","Elko","Ely","Fallon","Genoa","Goldfield","Henderson","Las Vegas","North Las Vegas",
    "Reno","Sparks","Virginia City","Winnemucca"
  ],
  "New Hampshire": [
    "Berlin","Claremont","Concord","Derry","Dover","Durham","Exeter","Franklin","Hanover","Hillsborough","Keene",
    "Laconia","Lebanon","Manchester","Nashua","Peterborough","Plymouth","Portsmouth","Rochester","Salem","Somersworth"
  ],
  "New Jersey": [
    "Asbury Park","Atlantic City","Bayonne","Bloomfield","Bordentown","Bound Brook","Bridgeton","Burlington","Caldwell",
    "Camden","Cape May","Clifton","Cranford","East Orange","Edison","Elizabeth","Englewood","Fort Lee","Glassboro",
    "Hackensack","Haddonfield","Hoboken","Irvington","Jersey City","Lakehurst","Lakewood","Long Beach","Long Branch",
    "Madison","Menlo Park","Millburn","Millville","Montclair","Morristown","Mount Holly","New Brunswick","New Milford",
    "Newark","Ocean City","Orange","Parsippany–Troy Hills","Passaic","Paterson","Perth Amboy","Plainfield","Princeton",
    "Ridgewood","Roselle","Rutherford","Salem","Somerville","South Orange Village","Totowa","Trenton","Union",
    "Union City","Vineland","Wayne","Weehawken","West New York","West Orange","Willingboro","Woodbridge"
  ],
  "New Mexico": [
    "Acoma","Alamogordo","Albuquerque","Artesia","Belen","Carlsbad","Clovis","Deming","Farmington","Gallup","Grants",
    "Hobbs","Las Cruces","Las Vegas","Los Alamos","Lovington","Portales","Raton","Roswell","Santa Fe","Shiprock",
    "Silver City","Socorro","Taos","Truth or Consequences","Tucumcari"
  ],
  "New York": [
    "Albany","Amsterdam","Auburn","Babylon","Batavia","Beacon","Bedford","Binghamton","Bronx","Brooklyn","Buffalo",
    "Chautauqua","Cheektowaga","Clinton","Cohoes","Coney Island","Cooperstown","Corning","Cortland","Crown Point",
    "Dunkirk","East Aurora","East Hampton","Eastchester","Elmira","Flushing","Forest Hills","Fredonia","Garden City",
    "Geneva","Glens Falls","Gloversville","Great Neck","Hammondsport","Harlem","Hempstead","Herkimer","Hudson",
    "Huntington","Hyde Park","Ilion","Ithaca","Jamestown","Johnstown","Kingston","Lackawanna","Lake Placid",
    "Levittown","Lockport","Mamaroneck","Manhattan","Massena","Middletown","Mineola","Mount Vernon","New Paltz",
    "New Rochelle","New Windsor","New York City","Newburgh","Niagara Falls","North Hempstead","Nyack","Ogdensburg",
    "Olean","Oneida","Oneonta","Ossining","Oswego","Oyster Bay","Palmyra","Peekskill","Plattsburgh","Port Washington",
    "Potsdam","Poughkeepsie","Queens","Rensselaer","Rochester","Rome","Rotterdam","Rye","Sag Harbor","Saranac Lake",
    "Saratoga Springs","Scarsdale","Schenectady","Seneca Falls","Southampton","Staten Island","Stony Brook","Stony Point",
    "Syracuse","Tarrytown","Ticonderoga","Tonawanda","Troy","Utica","Watertown","Watervliet","Watkins Glen","West Seneca",
    "White Plains","Woodstock","Yonkers"
  ],
  "North Carolina": [
    "Asheboro","Asheville","Bath","Beaufort","Boone","Burlington","Chapel Hill","Charlotte","Concord","Durham",
    "Edenton","Elizabeth City","Fayetteville","Gastonia","Goldsboro","Greensboro","Greenville","Halifax","Henderson",
    "Hickory","High Point","Hillsborough","Jacksonville","Kinston","Kitty Hawk","Lumberton","Morehead City","Morganton",
    "Nags Head","New Bern","Pinehurst","Raleigh","Rocky Mount","Salisbury","Shelby","Washington","Wilmington","Wilson",
    "Winston-Salem"
  ],
  "North Dakota": [
    "Bismarck","Devils Lake","Dickinson","Fargo","Grand Forks","Jamestown","Mandan","Minot","Rugby","Valley City",
    "Wahpeton","Williston"
  ],
  "Ohio": [
    "Akron","Alliance","Ashtabula","Athens","Barberton","Bedford","Bellefontaine","Bowling Green","Canton","Chillicothe",
    "Cincinnati","Cleveland","Cleveland Heights","Columbus","Conneaut","Cuyahoga Falls","Dayton","Defiance","Delaware",
    "East Cleveland","East Liverpool","Elyria","Euclid","Findlay","Gallipolis","Greenville","Hamilton","Kent","Kettering",
    "Lakewood","Lancaster","Lima","Lorain","Mansfield","Marietta","Marion","Martins Ferry","Massillon","Mentor","Middletown",
    "Milan","Mount Vernon","New Philadelphia","Newark","Niles","North College Hill","Norwalk","Oberlin","Painesville",
    "Parma","Piqua","Portsmouth","Put-in-Bay","Salem","Sandusky","Shaker Heights","Springfield","Steubenville","Tiffin",
    "Toledo","Urbana","Warren","Wooster","Worthington","Xenia","Yellow Springs","Youngstown","Zanesville"
  ],
  "Oklahoma": [
    "Ada","Altus","Alva","Anadarko","Ardmore","Bartlesville","Bethany","Chickasha","Claremore","Clinton","Cushing",
    "Duncan","Durant","Edmond","El Reno","Elk City","Enid","Eufaula","Frederick","Guthrie","Guymon","Hobart","Holdenville",
    "Hugo","Lawton","McAlester","Miami","Midwest City","Moore","Muskogee","Norman","Oklahoma City","Okmulgee",
    "Pauls Valley","Pawhuska","Perry","Ponca City","Pryor","Sallisaw","Sand Springs","Sapulpa","Seminole","Shawnee",
    "Stillwater","Tahlequah","The Village","Tulsa","Vinita","Wewoka","Woodward"
  ],
  "Oregon": [
    "Albany","Ashland","Astoria","Baker City","Beaverton","Bend","Brookings","Burns","Coos Bay","Corvallis","Eugene",
    "Grants Pass","Hillsboro","Hood River","Jacksonville","John Day","Klamath Falls","La Grande","Lake Oswego",
    "Lakeview","McMinnville","Medford","Newberg","Newport","Ontario","Oregon City","Pendleton","Port Orford","Portland",
    "Prineville","Redmond","Reedsport","Roseburg","Salem","Seaside","Springfield","The Dalles","Tillamook"
  ],
  "Pennsylvania": [
    "Abington","Aliquippa","Allentown","Altoona","Ambridge","Bedford","Bethlehem","Bloomsburg","Bradford","Bristol",
    "Carbondale","Carlisle","Chambersburg","Chester","Columbia","Easton","Erie","Franklin","Germantown","Gettysburg",
    "Greensburg","Hanover","Harmony","Harrisburg","Hazleton","Hershey","Homestead","Honesdale","Indiana","Jeannette",
    "Jim Thorpe","Johnstown","Lancaster","Lebanon","Levittown","Lewistown","Lock Haven","Lower Southampton","McKeesport",
    "Meadville","Middletown","Monroeville","Nanticoke","New Castle","New Hope","New Kensington","Norristown","Oil City",
    "Philadelphia","Phoenixville","Pittsburgh","Pottstown","Pottsville","Reading","Scranton","Shamokin","Sharon",
    "State College","Stroudsburg","Sunbury","Swarthmore","Tamaqua","Titusville","Uniontown","Warren","Washington",
    "West Chester","Wilkes-Barre","Williamsport","York"
  ],
  "Rhode Island": [
    "Barrington","Bristol","Central Falls","Cranston","East Greenwich","East Providence","Kingston","Middletown",
    "Narragansett","Newport","North Kingstown","Pawtucket","Portsmouth","Providence","South Kingstown","Tiverton",
    "Warren","Warwick","Westerly","Wickford","Woonsocket"
  ],
  "South Carolina": [
    "Abbeville","Aiken","Anderson","Beaufort","Camden","Charleston","Columbia","Darlington","Florence","Gaffney",
    "Georgetown","Greenville","Greenwood","Hartsville","Lancaster","Mount Pleasant","Myrtle Beach","Orangeburg",
    "Rock Hill","Spartanburg","Sumter","Union"
  ],
  "South Dakota": [
    "Aberdeen","Belle Fourche","Brookings","Canton","Custer","De Smet","Deadwood","Hot Springs","Huron","Lead",
    "Madison","Milbank","Mitchell","Mobridge","Pierre","Rapid City","Sioux Falls","Spearfish","Sturgis","Vermillion",
    "Watertown","Yankton"
  ],
  "Tennessee": [
    "Alcoa","Athens","Chattanooga","Clarksville","Cleveland","Columbia","Cookeville","Dayton","Elizabethton",
    "Franklin","Gallatin","Gatlinburg","Greeneville","Jackson","Johnson City","Jonesborough","Kingsport","Knoxville",
    "Lebanon","Maryville","Memphis","Morristown","Murfreesboro","Nashville","Norris","Oak Ridge","Shelbyville","Tullahoma"
  ],
  "Texas": [
    "Abilene","Alpine","Amarillo","Arlington","Austin","Baytown","Beaumont","Big Spring","Borger","Brownsville",
    "Bryan","Canyon","Cleburne","College Station","Corpus Christi","Crystal City","Dallas","Del Rio","Denison","Denton",
    "Eagle Pass","Edinburg","El Paso","Fort Worth","Freeport","Galveston","Garland","Goliad","Greenville","Harlingen",
    "Houston","Huntsville","Irving","Johnson City","Kilgore","Killeen","Kingsville","Laredo","Longview","Lubbock",
    "Lufkin","Marshall","McAllen","McKinney","Mesquite","Midland","Mission","Nacogdoches","New Braunfels","Odessa",
    "Orange","Pampa","Paris","Pasadena","Pecos","Pharr","Plainview","Plano","Port Arthur","Port Lavaca","Richardson",
    "San Angelo","San Antonio","San Felipe","San Marcos","Sherman","Sweetwater","Temple","Texarkana","Texas City",
    "Tyler","Uvalde","Victoria","Waco","Weatherford","Wichita Falls","Ysleta"
  ],
  "Utah": [
    "Alta","American Fork","Bountiful","Brigham City","Cedar City","Clearfield","Delta","Fillmore","Green River","Heber City",
    "Kanab","Layton","Lehi","Logan","Manti","Moab","Monticello","Murray","Nephi","Ogden","Orderville","Orem","Panguitch",
    "Park City","Payson","Price","Provo","Saint George","Salt Lake City","Spanish Fork","Springville","Tooele","Vernal"
  ],
  "Vermont": [
    "Barre","Bellows Falls","Bennington","Brattleboro","Burlington","Essex","Manchester","Middlebury","Montpelier","Newport",
    "Plymouth","Rutland","Saint Albans","Saint Johnsbury","Sharon","Winooski"
  ],
  "Virginia": [
    "Abingdon","Alexandria","Bristol","Charlottesville","Chesapeake","Danville","Fairfax","Falls Church","Fredericksburg",
    "Hampton","Hanover","Hopewell","Lexington","Lynchburg","Manassas","Martinsville","New Market","Newport News","Norfolk",
    "Petersburg","Portsmouth","Reston","Richmond","Roanoke","Staunton","Suffolk","Virginia Beach","Waynesboro","Williamsburg",
    "Winchester"
  ],
  "Washington": [
    "Aberdeen","Anacortes","Auburn","Bellevue","Bellingham","Bremerton","Centralia","Coulee Dam","Coupeville",
    "Ellensburg","Ephrata","Everett","Hoquiam","Kelso","Kennewick","Longview","Moses Lake","Oak Harbor","Olympia",
    "Pasco","Point Roberts","Port Angeles","Pullman","Puyallup","Redmond","Renton","Richland","Seattle","Spokane",
    "Tacoma","Vancouver","Walla Walla","Wenatchee","Yakima"
  ],
  "West Virginia": [
    "Bath","Beckley","Bluefield","Buckhannon","Charles Town","Charleston","Clarksburg","Elkins","Fairmont","Grafton",
    "Harpers Ferry","Hillsboro","Hinton","Huntington","Keyser","Lewisburg","Logan","Martinsburg","Morgantown","Moundsville",
    "New Martinsville","Parkersburg","Philippi","Point Pleasant","Princeton","Romney","Shepherdstown","South Charleston",
    "Summersville","Weirton","Welch","Wellsburg","Weston","Wheeling","White Sulphur Springs","Williamson"
  ],
  "Wisconsin": [
    "Appleton","Ashland","Baraboo","Belmont","Beloit","Eau Claire","Fond du Lac","Green Bay","Hayward","Janesville","Kenosha",
    "La Crosse","Lake Geneva","Madison","Manitowoc","Marinette","Menasha","Milwaukee","Neenah","New Glarus","Oconto",
    "Oshkosh","Peshtigo","Portage","Prairie du Chien","Racine","Rhinelander","Ripon","Sheboygan","Spring Green","Stevens Point",
    "Sturgeon Bay","Superior","Waukesha","Wausau","Wauwatosa","West Allis","West Bend","Wisconsin Dells"
  ],
  "Wyoming": [
    "Buffalo","Casper","Cheyenne","Cody","Douglas","Evanston","Gillette","Green River","Jackson","Lander","Laramie",
    "Newcastle","Powell","Rawlins","Riverton","Rock Springs","Sheridan","Ten Sleep","Thermopolis","Torrington","Worland"
  ]
};

// Flattened list of { city, state } objects for quick searching
const suggestions = Object.entries(stateCityList)
  .flatMap(([state, cities]) => cities.map(city => ({ city, state })));


// -------------------------------------
// 2) The "setup" function that attaches autocomplete + state select logic
// -------------------------------------
function setupCityStateAutocomplete(inputField, ghostField, stateSelect) {
  // Keep track of the text we will fill in on Tab
  let currentPrediction = "";

  // Reusable: populate the <select> with an array of states, optionally auto-selecting one
  function populateStateSelect(stateList, selectedState = null) {
    // Clear old options
    stateSelect.innerHTML = "";
    // Add new ones
    stateList.forEach(st => {
      const option = document.createElement("option");
      option.value = st;
      option.textContent = st;
      if (selectedState && selectedState === st) {
        option.selected = true;
      }
      stateSelect.appendChild(option);
    });
  }

  // Initially, show all states
  populateStateSelect(Object.keys(stateCityList));

  // Handler for city input
  inputField.addEventListener("input", (e) => {
    const typedValue = e.target.value;
    const typedValueLower = typedValue.toLowerCase();

    // If user cleared the input, reset everything
    if (!typedValue) {
      currentPrediction = "";
      ghostField.textContent = "";
      populateStateSelect(Object.keys(stateCityList)); // show all states
      return;
    }

    // 1. Find first city that starts with typedValue
    const firstMatch = suggestions.find(({ city }) =>
      city.toLowerCase().startsWith(typedValueLower)
    );

    if (firstMatch) {
      // Remainder for ghost text
      const remainder = firstMatch.city.slice(typedValue.length);
      currentPrediction = remainder;

      // Show typed portion as transparent, remainder as faint
      ghostField.innerHTML = `
        <span style="color: transparent">${typedValue}</span>
        <span style="color: inherit; line-height: normal;">${remainder}</span>
      `;
    } else {
      currentPrediction = "";
      ghostField.textContent = "";
    }

    // 2. Gather states that have at least one city starting with typedValue
    const matchedStates = new Set();
    suggestions.forEach(({ city, state }) => {
      if (city.toLowerCase().startsWith(typedValueLower)) {
        matchedStates.add(state);
      }
    });

    // If no states found, show them all; else show matched
    if (matchedStates.size === 0) {
      populateStateSelect(Object.keys(stateCityList));
    } else {
      const statesArray = Array.from(matchedStates).sort();
      // (Optional) auto-select if exactly one
      let selectedState = null;
      if (statesArray.length === 1) {
        selectedState = statesArray[0];
      }
      populateStateSelect(statesArray, selectedState);
    }
  });

  // Handler for Tab key to accept ghost text
  inputField.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && currentPrediction) {
      e.preventDefault();
      // Autocomplete city
      inputField.value += currentPrediction;
      ghostField.textContent = "";
      currentPrediction = "";

      // Possibly update the stateSelect if there's exactly one state for that city
      const typed = inputField.value.toLowerCase();
      const matches = suggestions.filter(({ city }) => city.toLowerCase() === typed);

      if (matches.length === 1) {
        // Only one state for that city, select it
        const onlyState = matches[0].state;
        populateStateSelect(Object.keys(stateCityList), onlyState);
      } else {
        // If multiple states or none, show all relevant states
        const matchedStates = new Set();
        suggestions.forEach(({ city, state }) => {
          if (city.toLowerCase() === typed) {
            matchedStates.add(state);
          }
        });
        if (matchedStates.size > 0) {
          populateStateSelect(Array.from(matchedStates).sort());
        }
      }
    }
  });
}


// -------------------------------------
// 3) Hook it all up for every form-block
// -------------------------------------
document.querySelectorAll(".form-block").forEach((block) => {
  const cityInput  = block.querySelector(".city-input");
  const ghostField = block.querySelector(".ghost-field");
  const stateSelect= block.querySelector(".state-select");

  setupCityStateAutocomplete(cityInput, ghostField, stateSelect);
});
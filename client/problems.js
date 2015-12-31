///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      TYPE 1     //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var problem1 = //Will use problem 2 3 4 5
[{id: 1, name: 'NETWORK', weight: 10},
{id: 2, name: 'SERVERS', weight: 20},
{id: 3, name: 'WORKING STATIONS', weight: 15},
{id: 4, name: 'RESSOURCES', weight: 5}];

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      TYPE 2     //////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var problem2 = //Will use problem 6 7 8 9
[{id: 5, name:'INTERNET CONNECTION', weight: 10},
{id: 6, name: 'INTRANET CONNECTION', weight: 15},
{id: 7, name: 'WLAN NETWORK', weight: 20},
{id: 8, name: 'WIFI NETWORK', weight: 20}];

var problem3 = //Will use problem 10 11 12 13
[{id: 9, name:'MAIL SERVERS', weight: 15},
{id: 10, name: 'LOGISITC SERVERS', weight: 20},
{id: 11, name: 'VPN SERVERS', weight: 20},
{id: 12, name: 'GIT SERVERS', weight: 10}];

var problem4 = //Will use problem 14 15 16 17
[{id: 13, name:'OPERATING SYSTEM PROBLEM (Unable to start properly)', weight: 15},
{id: 14, name: 'HARDWARE PROBLEM (Screen, Keyboard, etc...)', weight: 15},
{id: 15, name: 'SOFTWARE PROBLEM', weight: 15},
{id: 16, name: 'NETWORKING PROBLEM', weight: 10}];

var problem5 = //Will use problem 18 19 20 21
[{id: 17, name:'PRINTER', weight: 10},
{id: 18, name: 'PROJECTOR', weight: 10},
{id: 19, name: 'PHONE', weight: 10},
{id: 20, name: 'COFFEE MACHINE', weight: 5}];

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      NETWORK     /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var problem6 = //Internet Connection
[{id: 21, name:'UNABLE TO CONNECT TO THE INTERNET', weight: 20},
{id: 22, name: 'UNABLE TO ACCESS A SPECIFIC RESSOURCE ON THE INTERNET', weight: 15}];

var problem7 = //Intranet Connection
[{id: 25, name:'MY INTRANET PASSWORD IS NOT WORKING', weight: 35},
{id: 26, name: 'I LOCKED MY INTRANET ACCOUNT (TOO MANY PASSWORD ERRORS)', weight: 30},
{id: 27, name: 'MY INTRANET INTERFACE DOES NOT LOAD MY PERSONNAL DATA', weight: 25},
{id: 28, name: 'I CAN NOT POST DATA ON THE INTRANET', weight: 10}];

var problem8 = //WLAN Network
[{id: 29, name:'MY ETHERNET OUTLET WAS DAMAGED', weight: 30},
{id: 30, name: 'MY ETHERNET CABLE IS PLUGGED IN, BUT IT DOES NOT CONNECT', weight: 25},
{id: 31, name: 'CONNECTION IS UNSTABLE (FREQUENT DECONNECTIONS)', weight: 35},
{id: 32, name: 'CONNECTION IS UNUSUALY SLOW', weight: 25}];

var problem9 = //Wifi Network
[{id: 33, name:'USUAL NETWORK NAME DISAPPEARD', weight: 20},
{id: 34, name: 'USUAL NETWORK PASSWORD IS NOT WORKING', weight: 20},
{id: 35, name: 'CONNECTION IS UNSTABLE (FREQUENT DECONNECTIONS)', weight: 20},
{id: 36, name: 'CONNECTION IS UNUSUALY SLOW', weight: 10}];

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      SERVERS     /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var problem10 = //MAIL SERVERS
[{id: 53, name:'I CAN NOT SYNCHRONIZE MY MAIL-BOX', weight: 25},
{id: 54, name: 'I CAN NOT SEND E-MAILS', weight: 25},
{id: 55, name: 'I CAN NOT RECEIVE E-MAILS', weight: 25},
{id: 56, name: 'I CAN NOT SEND AND RECEIVE E-MAILS', weight: 40}];

var problem11 = //LOGISTIC SERVERS
[{id: 58, name: 'LOGISTIC SERVERS ARE UNREACHABLE', weight: 50},
{id: 58, name: 'LOGISITC SERVERS ARE SLOW', weight: 40},
{id: 57, name:'I CAN NOT CONNECT TO MY LOGISTIC ACCOUNT', weight: 35},
{id: 58, name: 'I LOCKED MY LOGISTIC ACCOUNT (TOO MANY PASSWORD ERRORS)', weight: 35},
{id: 59, name: 'I CAN NOT PERFORM ANY LOGISITC ACTIONS', weight: 40},
{id: 60, name: 'I CAN NOT LOAD LOGISITC DATA', weight: 35}];

var problem12 = //VPN SERVERS
[{id: 61, name:'VPN SERVICE IS UNREACHABLE', weight: 50},
{id: 61, name:'MY VPN LOGIN/PASSWORD IS INCORRECT', weight: 35},
{id: 62, name: 'MY VPN ACCOUNT WAS SET AS SUSPENDED', weight: 35},
{id: 63, name: 'MY VPN IS STUCK IN "CONNECTION STATE"', weight: 40},
{id: 64, name: 'MY VPN CONNECTION IS UNSTABLE', weight: 40}];

var problem13 = //GIT SERVERS
[{id: 61, name:'GIT SERVERS ARE UNREACHABLE', weight: 50},
{id: 65, name:'I CAN NOT PULL/COMMIT/PUSH TO MY GIT SERVER', weight: 40},
{id: 66, name: 'I CAN NOT UPLOAD A NEW SSH KEY', weight: 40},
{id: 67, name: 'I UPLOADED MY SSH KEY, BUT I CANNOT PULL/PUSH/etc...', weight: 50},
{id: 68, name: 'I CAN NOT CONNECT TO MY GIT ACCOUNT (WEB INTERFACE)', weight: 10}];

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      WORKING STATIONS     ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var problem14 = //OS PROBLEM
[{id: 53, name:'MESSAGE ON START : "No OS was detected on your computer..."', weight: 25},
{id: 54, name: 'OS IS STUCK IN "STARTING" SCREEN', weight: 25},
{id: 55, name: 'FREQUENT OS FREEZE (COMPUTER DOES NOT RESPOND AND YOU HAVE TO RESTART)', weight: 25},
{id: 56, name: 'UNEXPECTED SHUTDOWN', weight: 35}];

var problem15 = //HARDWARE
[{id: 57, name:'COMPUTER CAN NOT START (NO LED LIGHT)', weight: 45},
{id: 57, name:'COMPUTER START THEN SHUTDOWN IMMEDIATLY', weight: 45},
{id: 58, name: 'MY SCREEN IS BLACK', weight: 45},
{id: 59, name: 'MY PC DOES NOT CHARGE (LAPTOPS)', weight: 35},
{id: 60, name: 'MY KEYBOARD DOES NOT WORK', weight: 20},
{id: 60, name: 'SOUND PERIPHERALS ARE NOT WORKING (SPEAKERS/MICROPHONE)', weight: 5},
{id: 57, name:'WEIRD SOUND INSIDE MY COMPUTER (KLIK, KLIK, KLIK)', weight: 50}];

var problem16 = //SOFTWARE
[{id: 61, name:'LOGISTIC DOES NOT START', weight: 10},
{id: 62, name: 'VPN DOES NOT START', weight: 15},
{id: 63, name: 'WEB BROWSER DOES NOT START', weight: 20},
{id: 64, name: 'MULTIPLE SOFTWARES DO NOT START/WORK PROPERLY', weight: 20}];

var problem17 = //NETWORKING
[{id: 65, name:'MY ETHERNET CARD IS NOT WORKING', weight: 10},
{id: 66, name: 'MY WI-FI CARD IS NOT WORKING', weight: 15}];

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      RESSOURCES     //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var problem18 = //PRINTER
[{id: 69, name:'PRINTER IS NOT WORKING (DOES NOT START)', weight: 20},
{id: 70, name: 'PRINTER NETWORKING IS NOT WORKING', weight: 20},
{id: 71, name: 'NO MORE PAPER', weight: 15},
{id: 71, name: 'NO MORE INK', weight: 15},
{id: 72, name: 'THE PRINTER DOES NOT PRINT PROPERLY', weight: 25}];

var problem19 = //PROJECTOR
[{id: 73, name:'PROJECTOR IS NOT WORKING (DOES NOT START)', weight: 20},
{id: 74, name: 'PROJECTOR NETWORKING IS NOT WORKING (PARIS ONLY)', weight: 20},
{id: 75, name: 'PROJECTOR CABLE IS MISSING (OTHER CITIES)', weight: 20},
{id: 76, name: 'PROJECTOR COLORS ARE WEIRD', weight: 15}];

var problem20 = //PHONE
[{id: 77, name:'MY PHONE WAS DAMAGED', weight: 15},
{id: 78, name: 'UNABLE TO CALL "INSIDE THE BUILDING"', weight: 20},
{id: 79, name: 'UNABLE TO CALL "OUTSIDE THE BUILDING"', weight: 15},
{id: 80, name: 'UNABLE TO CALL "ANYWHERE..."', weight: 30}];

var problem21 = //COFFEE MACHINE
[{id: 81, name:'NO MORE COFFEE', weight: 5},
{id: 82, name: 'NO MORE FILTERS', weight: 5},
{id: 83, name: 'WEIRD SOUND', weight: 5},
{id: 84, name: 'COFFEE IS AWFUL', weight: 5}];

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////      USERS Inpact      ///////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

var userInpact = //Wifi Network
[{id: 85, name:'1 USER', weight: 10},
{id: 86, name: '2-5 USERS', weight: 20},
{id: 87, name: '5-10 USERS', weight: 30},
{id: 88, name: 'A MEETING/WORKING ROOM', weight: 50},
{id: 89, name: 'A WHOLE FLOOR', weight: 75},
{id: 90, name: 'A WHOLE BUILDING', weight: 125},
{id: 91, name: 'THE WHOLE COMPANY (MULTIPLE CITIES)', weight: 200}];

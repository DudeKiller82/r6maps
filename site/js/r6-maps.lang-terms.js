'use strict';

var R6MapsLangTerms = (function(undefined) {
  var terms = {},
    name = 'english',
    translations = {},
    englishTerms = {
      general: {
        pageTitle: 'Siege Maps - {mapName}',
        about: 'About',
        cameraViewCaption: '{floorName} Camera View',
        shortcutTip: 'Shortcut: {shortcut}'
      },
      floorNames: {
        basement: 'Basement',
        firstFloor: '1st Floor',
        secondFloor: '2nd Floor',
        thirdFloor: '3rd Floor',
        fourthFloor: '4th Floor',
        roof: 'Roof'
      },
      objectives: {
        bombShortA: 'A',
        bombShortB: 'B',
        bomb: 'Bomb',
        hostageShort: 'H',
        hostage: 'Hostage',
        secureShort: 'S',
        secure: 'Secure',
        showAll: 'Show All'
      },
      legend: {
        breakableWalls: 'Breakable walls',
        breakableFloorTraps: 'Brekable floor traps',
        ceilingHatches: 'Ceiling hatches',
        lineOfSightWalls: 'Line of sight walls',
        lineOfSightFloors: 'Line of sight floors',
        droneTunnels: 'Drone tunnels',
        objectives: 'Objectives',
        insertionPoints: 'Insertion points',
        securityCameras: 'Security cameras',
        skylights: 'Skylights',
        onFloorAboveOrBelow: 'On floor above or below'
      },
      mapNames: {
        bank: 'Bank',
        chalet: 'Chalet',
        club: 'Club House',
        consulate: 'Consulate',
        hereford: 'Hereford',
        house: 'House',
        kanal: 'Kanal',
        kafe: 'Kafe Dostoyevsky',
        oregon: 'Oregon',
        plane: 'Plane',
        yacht: 'Yacht'
      },
      mapRooms: {
        bank: {
          parkingLot: 'Parking Lot',
          boulevard: 'Boulevard',
          jewelryFront: 'Jewelry Front',
          plaza: 'Plaza',
          mainEntrance: 'Main Entrance',
          garageRamp: 'Garage<br/>Ramp',
          exteriorParking: 'Exterior Parking',
          garageRoof: 'Garage Roof',
          alleyAccess: 'Alley Access',
          backAlleyRooftop: 'Back Alley<br/>Rooftop',
          backAlley: 'Back Alley',
          highRoof: 'High Roof',
          lowRoof: 'Low Roof',
          vault: 'Vault',
          goldVault: 'Gold<br/>Vault',
          serverRoomStairs: 'Server Room Stairs',
          serverRoom: 'Server Room',
          CCTVRoom: 'CCTV<br/>Room',
          loadingDock: 'Loading Dock',
          secureHallway: 'Secure<br/>Hallway',
          sewer: 'Sewer',
          lockers: 'Lockers',
          vaultLobby: 'Vault Lobby',
          vaultEntrance: 'Vault<br/>Entrance',
          mainStairway: 'Main Stairway',
          bankGarage: 'Bank Garage',
          elevators: 'Elevators',
          tellersOffice: 'Tellers\' Office',
          archives: 'Archives',
          tellers: 'Tellers',
          loanOffice: 'Loan Office',
          officeHallway: 'Office Hallway',
          skylightStairwell: 'Skylight<br/>Stairwell',
          lobby: 'Lobby',
          openArea: 'Open Area',
          staffRoom: 'Staff Room',
          electricalRoom: 'Electrical<br/>Room',
          adminOffice: 'Admin Office',
          ATMs: 'ATMs',
          executiveHallway: 'Executive<br/>Hallway',
          frontDesk: 'Front<br/>Desk',
          executiveLounge: 'Executive<br/>Lounge',
          CEOOffice: 'CEO<br/>Office',
          janitorCloset: 'Janitor Closet',
          hallway: 'Hallway',
          terrace: 'Terrace',
          stockTradingRoom: 'Stock<br/>Trading<br/>Room',
          conferenceRoom: 'Conference Room'
        },
        chalet: {
          libraryStairs: 'Library Stairs',
          snowmobileGarageCorridor: 'Snowmobile Garage Corridor',
          snowmobileGarage: 'Snowmobile<br/>Garage',
          greatRoomStairs: 'Great<br/>Room<br/>Stairs',
          storageRoom: 'Storage Room',
          wineCellar: 'Wine<br/>Cellar',
          wineStock: 'Wine Stock',
          basementHallway: 'Basement<br/>Hallway',
          backyardStairs: 'Backyard<br/>Stairs',
          mainStairs: 'Main<br/>Stairs',
          mainGarage: 'Main Garage',
          garageEntrance: 'Garage<br/>Entrance',
          westEntrance: 'West<br/>Entrance',
          gamingRoomHallway: 'Gaming Room<br/>Hallway',
          gamingRoom: 'Gaming Room',
          bar: 'Bar',
          greatRoom: 'Great Room',
          diningRoom: 'Dining Room',
          mainEntrance: 'Main Entrance',
          trophyRoom: 'Trophy Room',
          kitchenHallway: 'Kitchen<br/>Hallway',
          kitchen: 'Kitchen',
          libraryHallway: 'Library Hallway',
          libraryEntrance: 'Library<br/>Entrance',
          library: 'Library',
          bedroomTerrace: 'Bedroom<br/>Terrace',
          fireplaceHallway: 'Fireplace<br/>Hallway',
          bedroomHallway: 'Bedroom<br/>Hallway',
          masterBathroom: 'Master<br/>Bathroom',
          masterBedroom: 'Master Bedroom',
          office: 'Office',
          woodenTrail: 'Wooden<br/>Trail',
          campfireWood: 'Campfire Wood',
          backyard: 'Backyard',
          gazeebo: 'Gazeebo',
          cliffsideStairs: 'Cliffside<br/>Stairs',
          cliffsideWoods: 'Cliffside Woods',
          backyardPatio: 'Backyard Patio',
          officeBalcony: 'Office<br/>Balcony',
          helipadTrail: 'Helipad<br/>Trail',
          helipad: 'Helipad',
          frontYardPatio: 'Front Yard<br/>Patio',
          frontYard: 'Front Yard',
          bathroomBalcony: 'Bathroom<br/>Balcony',
          libraryBalcony: 'Library<br/>Balcony',
          bedroomBalcony: 'Bedroom<br/>Balcony',
          snowmobiles: 'Snowmobiles'
        },
        club: {
          constructionSite: 'Construction<br/>Site',
          container: 'Container',
          graffitiArea: 'Graffiti Area',
          recreationArea: 'Recreation<br/>Area',
          junkyard: 'Junkyard',
          shippingDock: 'Shipping<br/>Dock',
          VIPParking: 'VIP Parking',
          mainGate: 'Main Gate',
          parking: 'Parking',
          kennels: 'Kennels',
          trash: 'Trash',
          centralSubroof: 'Central<br/>Subroof',
          easternRoof: 'Eastern Roof',
          centralRoof: 'Central<br/>Roof',
          westernRoof: 'Western Roof',
          balcony: 'Balcony',
          escapeTunnel: 'Escape<br/>Tunnel',
          arsenalRoom: 'Arsenal<br/>Room',
          basementHallway: 'Basement Hallway',
          memorialRoom: 'Memorial Room',
          utilityRoom: 'Utility<br/>Room',
          oilPit: 'Oil Pit',
          centralStairs: 'Central<br/>Stairs',
          church: 'Church',
          frontPorch: 'Front Porch',
          garage: 'Garage',
          lobby: 'Lobby',
          stockRoom: 'Stock Room',
          garageStorage: 'Garage<br/>Storage',
          lounge: 'Lounge',
          bar: 'Bar',
          centralHallway: 'Central Hallway',
          kitchen: 'Kitchen',
          kitchenEntrance: 'Kitchen<br/>Entrance',
          westernHallway: 'Western<br/>Hallway',
          stripClub: 'Strip Club',
          junkyardEntrance: 'Junkyard<br/>Entrance',
          sideEntrance: 'Side Entrance',
          changingRoom: 'Changing<br/>Room',
          bedroom: 'Bedroom',
          bathroom: 'Bathroom',
          bedroomHallway: 'Bedroom Hallway',
          logisticOffice: 'Logistic<br/>Office',
          gym: 'Gym',
          secretStash: 'Secret<br/>Stash',
          CCTVRoom: 'CCTV Room',
          cashRoom: 'Cash<br/>Room',
          easternStairs: 'Eastern<br/>Stairs'
        },
        consulate: {
          exitStairs: 'Exit<br/>Stairs',
          garage: 'Garage',
          basementCorridor: 'Basement Corridor',
          securityRoom: 'Security Room',
          cafeteria: 'Cafeteria',
          mainStairs: 'Main Stairs',
          lockerHallway: 'Locker<br/>Hallway',
          serviceStairs: 'Service Stairs',
          electicRoom: 'Electic<br/>Room',
          storageRoom: 'Storage Room',
          archives: 'Archives',
          archivesCorridor: 'Archives Corridor',
          pressRoom: 'Press Room',
          westCorridor: 'West Corridor',
          publicBathroom: 'Public<br/>Bathroom',
          antechamber: 'Antechamber',
          lobby: 'Lobby',
          eastCorridor: 'East<br/>Corridor',
          tellers: 'Tellers',
          visaOffice: 'Visa Office',
          visaEntrance: 'Visa<br/>Entrance',
          frontDoor: 'Front<br/>Door',
          balcony: 'Balcony',
          copyRoom: 'Copy Room',
          cabinet: 'Cabinet',
          administrationOffice: 'Administration Office',
          breakRoom: 'Break<br/>Room',
          frontOffice: 'Front Office',
          meetingRoom: 'Meeting<br/>Room',
          hallway: 'Hallway',
          consulFrontDesk: 'Consul<br/>Front<br/>Desk',
          privateBathroom: 'Private<br/>Bathroom',
          waitingRoom: 'Waiting<br/>Room',
          consulateOffice: 'Consulate<br/>Office',
          garageWay: 'Garage Way',
          courtyard: 'Courtyard',
          backCourtyard: 'Back Courtyard',
          sideEntrance: 'Side Entrance',
          dumpster: 'Dumpster',
          parking: 'Parking',
          gardens: 'Gardens',
          fountain: 'Fountain',
          emergencyExit: 'Emergency<br/>Exit',
          garageRoof: 'Garage<br/>Roof',
          memorialGarden: 'Memorial Garden',
          policeLine: 'Police Line',
          riotBarracade: 'Riot Barracade',
          eastFrontYard: 'East Front Yard',
          westFrontYard: 'West Front Yard',
          frontAlley: 'Front Alley',
          buildingRoof: 'Building Roof'
        },
        hereford: {
          armory: 'Armory',
          alleyStairs: 'Alley<br/>Stairs',
          lockers: 'Lockers',
          corridor: 'Corridor',
          mainStairs: 'Main Stairs',
          maintenanceArea: 'Maintenance<br/>Area',
          briefingRoom: 'Briefing<br/>Room',
          basementEntrance: 'Basement<br/>Entrance',
          garage: 'Garage',
          TVRoom: 'TV Room',
          garageCorridor: 'Garage Corridor',
          kitchen: 'Kitchen',
          corridor1: 'Corridor 1',
          diningRoom: 'Dining<br/>Room',
          pianoLounge: 'Piano Lounge',
          office: 'Office',
          masterBedroom: 'Master Bedroom',
          backAccess: 'Back Access',
          laundryRoom: 'Laundry<br/>Room',
          bathroom: 'Bathroom',
          kidsBedroom: 'Kids Bedroom',
          ballisticMatDepot: 'Ballistic Mat<br/>Depot',
          storage: 'Storage',
          storageCorridor: 'Storage<br/>Corridor',
          dummyDepot: 'Dummy<br/>Depot',
          workshop: 'Workshop',
          shootingRangeEastEntrance: 'Shooting Range<br/>East Entrance',
          shootingRangeWestEntrance: 'Shooting Range<br/>West Entrance',
          tireSetting: 'Tire Setting',
          observationRamp: 'Observation Ramp',
          barracks: 'Barracks',
          busBackAlley: 'Bus Back<br/>Alley',
          rappelTower: 'Rappel<br/>Tower',
          terrace: 'Terrace',
          frontAccess: 'Front Access',
          chapelGate: 'Chapel Gate',
          forkliftArea: 'Forklift<br/>Area',
          sideStairsAlley: 'Side Stairs<br/>Alley',
          sideStairs: 'Side Stairs',
          garageTop: 'Garage Top',
          rooftop: 'Rooftop'
        },
        house: {
          depot: 'Depot',
          trainingRoom: 'Training Room',
          kitchenStairs: 'Kitchen<br/>Stairs',
          sideStairs: 'Side<br/>Stairs',
          laundryRoom: 'Laundry<br/>Room',
          garage: 'Garage',
          livingRoom: 'Living Room',
          backEntrance: 'Back Entrance',
          lobby: 'Lobby',
          kitchen: 'Kitchen',
          office: 'Office',
          diningRoom: 'Dining<br/>Room',
          workshop: 'Workshop',
          kidsBedroom: 'Kid\'s Bedroom',
          upperHallway: 'Upper<br/>Hallway',
          lobbyStairs: 'Lobby<br/>Stairs',
          walkIn: 'Walk-in',
          masterBedroom: 'Master<br/>Bedroom',
          bathroom: 'Bathroom',
          sideStreet: 'Side<br/>Street',
          garageEntrance: 'Garage<br/>Entrance',
          garden: 'Garden',
          backAlley: 'Back Alley',
          patio: 'Patio',
          APCArea: 'APC Area',
          jacuzzi: 'Jacuzzi',
          basementStairs: 'Basement<br/>Stairs',
          treehouseAlley: 'Treehouse<br/>Alley',
          frontYard: 'Front Yard',
          frontStreet: 'Front Street',
          frontPorch: 'Front Porch',
          backPorch: 'Back Porch',
          backPorchTop: 'Back Porch Top',
          frontPorchTop: 'Front Porch Top',
          rooftop: 'Rooftop'
        },
        kanal: {
          boatGarage: 'Boat Garage',
          boatSupplies: 'Boat Supplies',
          pipes: 'Pipes',
          boatSuppliesHallway: 'Boat<br/>Supplies<br/>Hallway',
          lockerRoom: 'Locker Room',
          coastGuardStairs: 'Coast Guard<br/>Stairs',
          showers: 'Showers',
          loadingDock: 'Loading Dock',
          machineHallway: 'Machine<br/>Hallway',
          controlCenterStairs: 'Control Center<br/>Stairs',
          holdingRoom: 'Holding Room',
          holdingRoomHallway: 'Holding<br/>Room<br/>Hallway',
          radio: 'Radio',
          coastGuardOffice: 'Coast Guard<br/>Office',
          archives: 'Archives',
          coastGuardHall: 'Coast<br/>Guard<br/>Hall',
          mainEntrance: 'Main<br/>Entrance',
          lounge: 'Lounge',
          bridge: 'Bridge',
          modelRoom: 'Model Room',
          securityRoom: 'Security<br/>Room',
          projectorRoom: 'Projector Room',
          mapsOffice: 'Maps Office',
          mapsOfficeHallway: 'Maps Office Hallway',
          kitchen: 'Kitchen',
          cafeteria: 'Cafeteria',
          plantsHallway: 'Plants Hallway',
          thirdFloorExit: 'Third<br/>Floor<br/>Exit',
          controlRoom: 'Control Room',
          electricRoom: 'Electric<br/>Room',
          controlRoomHallway: 'Control Room Hallway',
          serverRoom: 'Server Room',
          lockgate: 'Lockgate',
          quayContainers: 'Quay Containers',
          lockgateTunnel: 'Lockgate<br/>Tunnel',
          waterWalkway: 'Water Walkway',
          quayConstruction: 'Quay Construction',
          constructionSite: 'Construction<br/>Site',
          constructionEntrance: 'Construction<br/>Entrance',
          parkingAlley: 'Parking Alley',
          parkingEntrance: 'Parking<br/>Entrance',
          middleRoad: 'Middle<br/>Road',
          forkliftAlley: 'Forklift<br/>Alley',
          frontLawn: 'Front Lawn',
          basementStairs: 'Basement Stairs',
          coastGuardRoof: 'Coast<br/>Guard<br/>Roof',
          roofBrickPile: 'Roof<br/>Brick<br/>Pile',
          balcony: 'Balcony',
          controlCenterRoof: 'Control<br/>Center<br/>Roof',
          dockStairs: 'Dock Stairs',
          parking: 'Parking',
          boatCrane: 'Boat Crane'
        },
        kafe: {
          frontStairs: 'Front Stairs',
          bakery: 'Bakery',
          bakeryKitchen: 'Bakery<br/>Kitchen',
          kitchenPrep: 'Kitchen<br/>Prep',
          kitchenGrill: 'Kitchen Grill',
          kitchenPickUp: 'Kitchen<br/>Pick Up',
          coldRoom: 'Cold Room',
          diningRoom: 'Dining Room',
          backStairs: 'Back<br/>Stairs',
          coldRoomCorridor: 'Cold<br/>Room<br/>Corridor',
          VIPSection: 'VIP<br/>Section',
          barStairs: 'Bar Stairs',
          storage: 'Storage',
          museumEntrance: 'Museum Entrance',
          miningRoom: 'Mining Room',
          trainMuseum: 'Train Museum',
          pillarDiningRoom: 'Pillar Dining Room',
          mainCorridor: 'Main<br/>Corridor',
          readingRoomCorridor: 'Reading Room Corridor',
          readingRoom: 'Reading Room',
          fireplaceHall: 'Fireplace<br/>Hall',
          cigarShop: 'Cigar Shop',
          cigarLounge: 'Cigar Lounge',
          bar: 'Bar',
          barBackstore: 'Bar<br/>Backstore',
          washrooms: 'Washrooms',
          washroomCorridor: 'Washroom Corridor',
          cocktailLounge: 'Cocktail Lounge',
          cocktailLoungeEntrance: 'Cocktail<br/>Lounge<br/>Entrance',
          westMainStreet: 'West Main Street',
          mainStreet: 'Main Street',
          bakeryParking: 'Bakery<br/>Parking',
          bakeryRoof: 'Bakery Roof',
          cafeRoofTop: 'Cafe Roof Top',
          terrace: 'Terrace',
          backAlley: 'Back Alley',
          garrage: 'Garrage',
          parkAlley: 'Park<br/>Alley'
        },
        oregon: {
          towerStairs: 'Tower Stairs',
          boilerRoom: 'Boiler<br/>Room',
          electricRoom: 'Electric<br/>Room',
          bunkerEntrance: 'Bunker<br/>Entrance',
          bunker: 'Bunker',
          basementCorridor: 'Basement<br/>Corridor',
          supplyRoom: 'Supply Room',
          laundryRoom: 'Laundry Room',
          laundryStorage: 'Laundry<br/>Storage',
          laundryStairs: 'Laundry<br/>Stairs',
          office: 'Office',
          diningHall: 'Dining<br/>Hall',
          diningHallCorridor: 'Dining Hall Corridor',
          showers: 'Showers',
          kitchen: 'Kitchen',
          bathroom: 'Bathroom',
          dormStairs: 'Dorm Stairs',
          pantry: 'Pantry',
          bathroomCorridor: 'Bathroom Corridor',
          classroom: 'Classroom',
          lobby: 'Lobby',
          mainStairs: 'Main<br/>Stairs',
          meetingHall: 'Meeting Hall',
          rearStage: 'Rear Stage',
          garage: 'Garage',
          officeStorage: 'Office Storage',
          kidsDorm: 'Kids\' Dorm',
          dormMainHall: 'Dorm Main Hall',
          smallDorms: 'Small Dorms',
          armoryCorridor: 'Armory Corridor',
          masterBedroom: 'Master<br/>Bedroom',
          armory: 'Armory',
          walkIn: 'Walk In',
          attic: 'Attic',
          watchTower: 'Watch Tower',
          busYard: 'Bus Yard',
          junkyard: 'Junkyard',
          farmlands: 'Farmlands',
          shootingRange: 'Shooting<br/>Range',
          constructionSite: 'Construction Site',
          parking: 'Parking',
          mainEntrance: 'Main Entrance',
          street: 'Street',
          balcony: 'Balcony',
          diningHallRoof: 'Dining Hall Roof',
          officeRoof: 'Office Roof',
          meetingHallEntrance: 'Meeting Hall<br/>Entrance',
          garageRoof: 'Garage Roof',
          dormsRoof: 'Dorms Roof',
          meetingHallRoof: 'Meeting<br/>Hall<br/>Roof'
        },
        plane: {
          meetingRoom: 'Meeting<br/>Room',
          frontHallway: 'Front<br/>Hallway',
          executiveOffice: 'Executive<br/>Office',
          mainEntrance: 'Main Entrance',
          frontStairs: 'Front Stairs',
          pantry: 'Pantry',
          kitchen: 'Kitchen',
          executiveHallway: 'Executive Hallway',
          executiveBedroom: 'Executive<br/>Bedroom',
          changeRoom: 'Change<br/>Room',
          laund: 'Laund.',
          frontServiceEntrance: 'Front Service<br/>Entrance',
          rightWing: 'Right Wing',
          backServiceEntrance: 'Back Service<br/>Entrance',
          reporterEntrance: 'Reporter Entrance',
          leftWing: 'Left Wing',
          staffSection: 'Staff<br/>Section',
          securityRoom: 'Security<br/>Room',
          pressSectionA: 'Press Section A',
          pressSectionB: 'Press Section B',
          backStairs: 'Back Stairs',
          cargoHold: 'Cargo Hold',
          serviceCorridor: 'Service Corridor',
          storage: 'Storage',
          luggageHold: 'Luggage<br/>Hold',
          firstAidStation: 'First Aid Station',
          cargoFrontEntrance: 'Cargo Front<br/>Entrance',
          cockpitStairs: 'Cockpit Stairs',
          cabinStaff: 'Cabin<br/>Staff',
          radioCabin: 'Radio Cabin',
          cabin: 'Cabin',
          caterer: 'Caterer',
          serverRoomA: 'Server Room A',
          serverRoomB: 'Server Room B',
          technicalSeating: 'Technical Seating'
        },
        yacht: {
          mapsRoom: 'Maps Room',
          cockpit: 'Cockpit',
          cockpitHallway: 'Cockpit Hallway',
          captainsOffice: 'Captain\'s Office',
          cockpitBalcony: 'Cockpit<br/>Balcony',
          topDeckStairs: 'Top Deck<br/>Stairs',
          helipadEntrance: 'Helipad<br/>Entrance',
          helipad: 'Helipad',
          spaDeck: 'Spa<br/>Deck',
          eastDeck: 'East Deck',
          westDeck: 'West Deck',
          frontDeck: 'Front<br/>Deck',
          masterBedroom: 'Master<br/>Bedroom',
          casino: 'Casino',
          pokerRoom: 'Poker Room',
          bathroom: 'Bathroom',
          bedroomHallway: 'Bedroom Hallway',
          casinoHallway: 'Casino Hallway',
          globeHallway: 'Globe<br/>Hallway',
          lounge: 'Lounge',
          cafeteria: 'Cafeteria',
          engine: 'Engine',
          backEntrance: 'Back<br/>Entrance',
          rearDeck: 'Rear<br/>Deck',
          serverRoom: 'Server Room',
          engineStorage: 'Engine Storage',
          engineControl: 'Engine<br/>Control',
          backStairs: 'Back<br/>Stairs',
          emergencyExit: 'Emergency Exit',
          engineHallway: 'Engine Hallway',
          frontStairs: 'Front<br/>Stairs',
          kitchen: 'Kitchen',
          staffDormitory: 'Staff Dormitory',
          westBalcony: 'West Balcony',
          eastBalcony: 'East Balcony',
          kitchenHallway: 'Kitchen Hallway',
          kitchenStairs: 'Kitchen Stairs',
          kitchenPantry: 'Kitchen<br/>Pantry',
          infirmary: 'Infirmary',
          borealSubRoom: 'Boreal Sub<br/>Room',
          cafeteriaHallway: 'Cafeteria Hallway',
          engineUtility: 'Engine<br/>Utility',
          submarine: 'Submarine',
          westGlacier: 'West Glacier',
          eastHullBreach: 'East Hull<br/>Breach',
          eastGlacier: 'East Glacier',
          frozenRiver: 'Frozen River',
          zodiac: 'Zodiac',
          westHullBreach: 'West Hull Breach'
        }
      }
    };

  var registerLanguage = function registerLanguage(language, terms) {
    translations[language] = terms;
  };

  var loadLanguage = function loadLanguage(language) {
    loadTerms(translations[language]);
  };

  var loadTerms = function loadTerms(newTerms) {
    loadDefaultTerms();
    $.extend(true, terms, newTerms);
  };

  var loadDefaultTerms = function loadDefaultTerms() {
    $.extend(true, terms, englishTerms);
  };

  registerLanguage(name, englishTerms)
  loadDefaultTerms();

  return  {
    name: name,
    terms: terms,
    registerLanguage: registerLanguage,
    loadLanguage: loadLanguage
  };
})();

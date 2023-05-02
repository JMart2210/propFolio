let data = {
  "status": {
    "version": "1.0.0",
    "code": 0,
    "msg": "SuccessWithResult",
    "total": 1,
    "page": 1,
    "pagesize": 10,
    "transactionID": "5d830e1d8c06ab9d430ba0885ff97352"
  },
  "echoed_fields": {
    "jobID": "",
    "loanNumber": "",
    "preparedBy": "",
    "resellerID": "",
    "preparedFor": ""
  },
  "property": [
    {
      "identifier": {
        "Id": 4310061,
        "fips": "12031",
        "apn": "156332-3072",
        "attomId": 4310061
      },
      "lot": {
        "depth": 103,
        "frontage": 62,
        "lotsize1": 0.1435032,
        "lotsize2": 6251
      },
      "area": {
        "countrysecsubd": "Duval"
      },
      "address": {
        "country": "US",
        "countrySubd": "FL",
        "line1": "11482 LUMBERJACK CIR W",
        "line2": "JACKSONVILLE, FL 32223",
        "locality": "JACKSONVILLE",
        "matchCode": "ExaStr",
        "oneLine": "11482 LUMBERJACK CIR W, JACKSONVILLE, FL 32223",
        "postal1": "32223",
        "postal2": "8712",
        "postal3": "R044"
      },
      "location": {
        "accuracy": "Rooftop",
        "latitude": "30.167016",
        "longitude": "-81.615881",
        "distance": 0,
        "geoid": "CO12031, CS1291642, DB1200480, ND0000042492, ND0000042591, PL1235000, RS0000256211, SB0000078109, SB0000078117, SB0000078218, ZI32223",
        "geoIdV4": {
          "CO": "a69d2a4b03b2b50c0fcf1badffd56051",
          "CS": "7f3132c2259f3cf8c98ac91c9f99c906",
          "DB": "6768c2df42fba2b0130ef73d481cd257",
          "N1": "f3cbdca1c71754fbdf6318e6b350f0a1",
          "N2": "fae52f7ff31871f71c0d35edbe9d8e89",
          "N4": "72d7efe35e1e7a2298015e5fc80ff86a",
          "PL": "43d3a41876bfc9d7a76210e923f1da40",
          "SB": "cf173e8c87a985c98b685b6be6a736bc,b6a6bd8e98846c5fd375b68085307eb8,255972a30a898b0ce0062d7abe5f5329",
          "ZI": "f78936dcdfb8255b542720f192298099"
        }
      },
      "summary": {
        "propclass": "Single Family Residence / Townhouse",
        "propsubtype": "Residential",
        "proptype": "SFR",
        "yearbuilt": 1987,
        "propLandUse": "SFR",
        "propIndicator": "10",
        "legal1": "41-95 08-4S-27E TIMBERWOODS LOT 36 BLK 1"
      },
      "utilities": {
        "coolingtype": "CENTRAL",
        "heatingfuel": "ELECTRIC",
        "heatingtype": "FORCED AIR",
        "walltype": "ALUMINUM/VINYL"
      },
      "building": {
        "size": {
          "bldgsize": 1060,
          "grosssize": 1060,
          "grosssizeadjusted": 1060,
          "groundfloorsize": 1062,
          "livingsize": 1060,
          "sizeInd": "LIVING SQFT",
          "universalsize": 1060
        },
        "rooms": {
          "bathstotal": 2,
          "beds": 3
        },
        "interior": {
          "fplccount": 1,
          "fplcind": "Y",
          "fplctype": "YES"
        },
        "parking": {
          "prkgSize": 396
        },
        "summary": {
          "levels": 1,
          "storyDesc": "CONVENTIONAL HOUSE",
          "unitsCount": "1"
        }
      },
      "avm": {
        "eventDate": "2023-02-21",
        "amount": {
          "scr": 97,
          "value": 342851,
          "high": 353136,
          "low": 332565,
          "fsd": 3
        }
      },
      "sale": {
        "buyerName": "JEREMY A MARTIN,MEGAN L MARTIN",
        "sellerName": "WELLS FARGO BK 2004-11",
        "salesearchdate": "2012-01-09",
        "saleTransDate": "2011-12-08",
        "mortgage": {
          "FirstConcurrent": {
            "trustDeedDocumentNumber": "15817-0429",
            "amount": 69210
          },
          "SecondConcurrent": {}
        },
        "amount": {
          "saleamt": 76900,
          "salecode": "CONFIRMED sales price confirmed from document, affidavit, or customer",
          "salerecdate": "2012-01-09",
          "saledisclosuretype": 0,
          "saledoctype": "DEED",
          "saledocnum": "0158170427",
          "saletranstype": "Resale"
        },
        "calculation": {
          "priceperbed": 25633,
          "pricepersizeunit": 72.55
        }
      },
      "assessment": {
        "assessed": {
          "assdttlvalue": 193561
        },
        "market": {
          "mktttlvalue": 193561,
          "mktlandvalue": 65000
        }
      },
      "owner": {
        "corporateindicator": "N",
        "owner1": {
          "lastname": "MARTIN ",
          "firstnameandmi": "JEREMY A"
        },
        "owner2": {},
        "owner3": {
          "lastname": "MARTIN ",
          "firstnameandmi": "MEGAN L"
        },
        "owner4": {},
        "mailingaddressoneline": "PO BOX 57172, JACKSONVILLE, FL 32241-7172"
      },
      "vintage": {
        "lastModified": "2023-02-20",
        "pubDate": "2023-02-20"
      }
    }
  ]
}

console.log(data.property[0].address.line1);
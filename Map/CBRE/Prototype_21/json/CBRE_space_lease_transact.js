{ "formStruct" : {
   "fields": {
      "space_info>SortOrder": {
         "name": "space_info>SortOrder",
         "label": "SortOrder",
         "type": "int",
         "inherit": "",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "true",
         "compulField": "true",
         "validateField": "true"
      },
      "space_info>SpaceID": {
         "name": "space_info>SpaceID",
         "label": "SpaceID",
         "type": "VARCHAR(100)",
         "inherit": "",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "true",
         "compulField": "true",
         "validateField": "true"
      },
      "space_info>Floor": {
         "name": "space_info>Floor",
         "label": "Floor",
         "type": "VARCHAR(100)",
         "inherit": "",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "true",
         "compulField": "true",
         "validateField": "true"
      },
      "space_info>FloorID": {
         "name": "space_info>FloorID",
         "label": "FloorID",
         "type": "VARCHAR(100)",
         "inherit": "",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "true",
         "compulField": "true",
         "validateField": "true"
      },
      "space_info>BuildingName_x": {
         "name": "space_info>BuildingName_x",
         "label": "BuildingName x",
         "type": "VARCHAR(100)",
         "inherit": "",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "true",
         "compulField": "true",
         "validateField": "true"
      },
      "space_info>SpaceName": {
         "name": "space_info>SpaceName",
         "label": "SpaceName",
         "type": "VARCHAR(100)",
         "inherit": "",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "true",
         "compulField": "true",
         "validateField": "true"
      },
      "po_floor_3D>floorplan_url": {
         "name": "po_floor_3D>floorplan_url",
         "label": "po floor 3D floorplan url",
         "type": "int",
         "inherit": "> (space_info,po_floor_3D,po_floor_3D_space_info) ",
         "inForm": "true",
         "query": "false",
         "results": "false",
         "viewField": "true",
         "editField": "false",
         "compulField": "false",
         "validateField": "false"
      }
   },
   "lists": {
      "lease_info": {
         "label": "lease info",
         "fields": [
            {
               "name": "lease_info>Updated_At",
               "label": "lease info Updated At",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>ID",
               "label": "lease info ID",
               "type": "INTEGER",
               "inherit": ""
            },
            {
               "name": "lease_info>ID",
               "label": "lease info ID",
               "type": "INTEGER",
               "inherit": ""
            },
            {
               "name": "lease_info>Property_ID_x",
               "label": "lease info Property ID x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>BuildingName_x",
               "label": "lease info BuildingName x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>PropertyType_x",
               "label": "lease info PropertyType x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>FloorID_x",
               "label": "lease info FloorID x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>Floor_x",
               "label": "lease info Floor x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>SortOrder_x",
               "label": "lease info SortOrder x",
               "type": "int",
               "inherit": ""
            },
            {
               "name": "lease_info>SpaceID_x",
               "label": "lease info SpaceID x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>SpaceName_x",
               "label": "lease info SpaceName x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>SpaceArea(Sqft)_x",
               "label": "lease info SpaceArea(Sqft) x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>PossessionStatus_x",
               "label": "lease info PossessionStatus x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>SpaceStatus_x",
               "label": "lease info SpaceStatus x",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>LeaseTitle",
               "label": "lease info LeaseTitle",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>LeaseID",
               "label": "lease info LeaseID",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>LeasePropertyType",
               "label": "lease info LeasePropertyType",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>CurrentLease",
               "label": "lease info CurrentLease",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>CBREDeal",
               "label": "lease info CBREDeal",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>ThirdPartyAgent",
               "label": "lease info ThirdPartyAgent",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>PrimaryTenantAccount",
               "label": "lease info PrimaryTenantAccount",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>CommencementDate",
               "label": "lease info CommencementDate",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>ExpiryDate",
               "label": "lease info ExpiryDate",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>TransactionDate",
               "label": "lease info TransactionDate",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>LeaseTerm",
               "label": "lease info LeaseTerm",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>LeaseArea",
               "label": "lease info LeaseArea",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>CreatedBy",
               "label": "lease info CreatedBy",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>Created",
               "label": "lease info Created",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>ModifiedBy",
               "label": "lease info ModifiedBy",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>Modified",
               "label": "lease info Modified",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>LeaseType",
               "label": "lease info LeaseType",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "lease_info>Created_At",
               "label": "lease info Created At",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "lease_info>Updated_at",
               "label": "lease info Updated at",
               "type": "datetime",
               "inherit": ""
            }
         ]
      },
      "transaction": {
         "label": "transaction",
         "fields": [
            {
               "name": "transaction>space_size",
               "label": "transaction space size",
               "type": "decimal(12,2)",
               "inherit": ""
            },
            {
               "name": "transaction>primary_tenant",
               "label": "transaction primary tenant",
               "type": "VARCHAR(100)",
               "inherit": ""
            },
            {
               "name": "transaction>lettable_area",
               "label": "transaction lettable area",
               "type": "decimal(12,2)",
               "inherit": ""
            },
            {
               "name": "transaction>date",
               "label": "transaction date",
               "type": "datetime",
               "inherit": ""
            },
            {
               "name": "transaction>usage_list",
               "label": "transaction usage list",
               "type": "VARCHAR(200)",
               "inherit": ""
            },
            {
               "name": "transaction>entity",
               "label": "transaction entity",
               "type": "ENUM(50)",
               "inherit": ""
            },
            {
               "name": "transaction>type",
               "label": "transaction type",
               "type": "ENUM(50)",
               "inherit": ""
            },
            {
               "name": "transaction>unit_id",
               "label": "transaction unit id",
               "type": "VARCHAR(20)",
               "inherit": ""
            },
            {
               "name": "transaction>floor",
               "label": "transaction floor",
               "type": "VARCHAR(20)",
               "inherit": ""
            },
            {
               "name": "transaction>ID",
               "label": "transaction ID",
               "type": "INTEGER",
               "inherit": ""
            }
         ]
      }
   },
   "entity": "space_info"
},
 "sampleDataList" : {
   "SortOrder": "dummy_8",
   "SpaceID": "dummy_3",
   "Floor": "dummy_8",
   "FloorID": "dummy_1",
   "BuildingName_x": "dummy_6",
   "SpaceName": "dummy_1",
   "floorplan_url": "dummy_3",
   "lists": {
      "lease_info": [
         {
            "Updated_At": "11/3/2017, 02:15:26",
            "ID": 1,
            "Property_ID_x": "dummy_9",
            "BuildingName_x": "dummy_8",
            "PropertyType_x": "dummy_9",
            "FloorID_x": "dummy_4",
            "Floor_x": "dummy_2",
            "SortOrder_x": "dummy_7",
            "SpaceID_x": "dummy_0",
            "SpaceName_x": "dummy_8",
            "SpaceArea(Sqft)_x": "dummy_2",
            "PossessionStatus_x": "dummy_0",
            "SpaceStatus_x": "dummy_8",
            "LeaseTitle": "dummy_2",
            "LeaseID": "dummy_8",
            "LeasePropertyType": "dummy_8",
            "CurrentLease": "dummy_4",
            "CBREDeal": "dummy_3",
            "ThirdPartyAgent": "dummy_3",
            "PrimaryTenantAccount": "dummy_5",
            "CommencementDate": "2/10/2019, 17:17:00",
            "ExpiryDate": "10/10/2016, 20:04:59",
            "TransactionDate": "2/3/2023, 23:59:21",
            "LeaseTerm": "dummy_1",
            "LeaseArea": "dummy_1",
            "CreatedBy": "dummy_8",
            "Created": "11/7/2019, 10:22:12",
            "ModifiedBy": "dummy_3",
            "Modified": "1/15/2019, 04:43:26",
            "LeaseType": "dummy_1",
            "Created_At": "9/8/2020, 02:14:35",
            "Updated_at": "2/9/2015, 06:58:09"
         },
         {
            "Updated_At": "10/27/2017, 08:51:34",
            "ID": 6,
            "Property_ID_x": "dummy_7",
            "BuildingName_x": "dummy_6",
            "PropertyType_x": "dummy_0",
            "FloorID_x": "dummy_5",
            "Floor_x": "dummy_9",
            "SortOrder_x": "dummy_6",
            "SpaceID_x": "dummy_4",
            "SpaceName_x": "dummy_5",
            "SpaceArea(Sqft)_x": "dummy_8",
            "PossessionStatus_x": "dummy_8",
            "SpaceStatus_x": "dummy_6",
            "LeaseTitle": "dummy_5",
            "LeaseID": "dummy_9",
            "LeasePropertyType": "dummy_5",
            "CurrentLease": "dummy_4",
            "CBREDeal": "dummy_1",
            "ThirdPartyAgent": "dummy_0",
            "PrimaryTenantAccount": "dummy_3",
            "CommencementDate": "4/8/2018, 17:56:50",
            "ExpiryDate": "2/27/2022, 11:26:39",
            "TransactionDate": "5/5/2022, 05:30:08",
            "LeaseTerm": "dummy_8",
            "LeaseArea": "dummy_9",
            "CreatedBy": "dummy_4",
            "Created": "1/16/2015, 04:40:02",
            "ModifiedBy": "dummy_5",
            "Modified": "5/29/2022, 17:51:50",
            "LeaseType": "dummy_2",
            "Created_At": "7/3/2022, 23:38:10",
            "Updated_at": "7/14/2015, 23:05:15"
         },
         {
            "Updated_At": "8/16/2016, 21:14:01",
            "ID": 3,
            "Property_ID_x": "dummy_5",
            "BuildingName_x": "dummy_9",
            "PropertyType_x": "dummy_0",
            "FloorID_x": "dummy_6",
            "Floor_x": "dummy_2",
            "SortOrder_x": "dummy_1",
            "SpaceID_x": "dummy_9",
            "SpaceName_x": "dummy_2",
            "SpaceArea(Sqft)_x": "dummy_1",
            "PossessionStatus_x": "dummy_9",
            "SpaceStatus_x": "dummy_8",
            "LeaseTitle": "dummy_9",
            "LeaseID": "dummy_6",
            "LeasePropertyType": "dummy_0",
            "CurrentLease": "dummy_5",
            "CBREDeal": "dummy_9",
            "ThirdPartyAgent": "dummy_5",
            "PrimaryTenantAccount": "dummy_7",
            "CommencementDate": "10/5/2017, 03:51:28",
            "ExpiryDate": "2/15/2019, 04:30:04",
            "TransactionDate": "4/9/2020, 09:22:10",
            "LeaseTerm": "dummy_4",
            "LeaseArea": "dummy_2",
            "CreatedBy": "dummy_5",
            "Created": "5/30/2018, 06:11:21",
            "ModifiedBy": "dummy_1",
            "Modified": "4/8/2022, 13:22:27",
            "LeaseType": "dummy_9",
            "Created_At": "8/4/2018, 03:34:39",
            "Updated_at": "1/6/2016, 08:33:46"
         },
         {
            "Updated_At": "11/3/2018, 22:30:06",
            "ID": 5,
            "Property_ID_x": "dummy_0",
            "BuildingName_x": "dummy_2",
            "PropertyType_x": "dummy_8",
            "FloorID_x": "dummy_3",
            "Floor_x": "dummy_9",
            "SortOrder_x": "dummy_7",
            "SpaceID_x": "dummy_0",
            "SpaceName_x": "dummy_8",
            "SpaceArea(Sqft)_x": "dummy_7",
            "PossessionStatus_x": "dummy_5",
            "SpaceStatus_x": "dummy_4",
            "LeaseTitle": "dummy_5",
            "LeaseID": "dummy_4",
            "LeasePropertyType": "dummy_9",
            "CurrentLease": "dummy_6",
            "CBREDeal": "dummy_4",
            "ThirdPartyAgent": "dummy_1",
            "PrimaryTenantAccount": "dummy_6",
            "CommencementDate": "4/28/2015, 20:02:51",
            "ExpiryDate": "3/20/2018, 17:21:12",
            "TransactionDate": "11/16/2016, 10:18:05",
            "LeaseTerm": "dummy_7",
            "LeaseArea": "dummy_2",
            "CreatedBy": "dummy_5",
            "Created": "1/10/2019, 06:20:12",
            "ModifiedBy": "dummy_7",
            "Modified": "10/18/2015, 14:47:36",
            "LeaseType": "dummy_5",
            "Created_At": "8/14/2015, 17:51:10",
            "Updated_at": "8/26/2015, 05:55:06"
         },
         {
            "Updated_At": "7/1/2019, 21:01:48",
            "ID": 9,
            "Property_ID_x": "dummy_9",
            "BuildingName_x": "dummy_0",
            "PropertyType_x": "dummy_5",
            "FloorID_x": "dummy_7",
            "Floor_x": "dummy_8",
            "SortOrder_x": "dummy_3",
            "SpaceID_x": "dummy_4",
            "SpaceName_x": "dummy_5",
            "SpaceArea(Sqft)_x": "dummy_3",
            "PossessionStatus_x": "dummy_6",
            "SpaceStatus_x": "dummy_7",
            "LeaseTitle": "dummy_2",
            "LeaseID": "dummy_8",
            "LeasePropertyType": "dummy_7",
            "CurrentLease": "dummy_6",
            "CBREDeal": "dummy_6",
            "ThirdPartyAgent": "dummy_9",
            "PrimaryTenantAccount": "dummy_3",
            "CommencementDate": "4/13/2022, 24:07:46",
            "ExpiryDate": "10/2/2016, 14:25:00",
            "TransactionDate": "1/8/2021, 24:58:57",
            "LeaseTerm": "dummy_3",
            "LeaseArea": "dummy_6",
            "CreatedBy": "dummy_5",
            "Created": "6/29/2020, 06:28:13",
            "ModifiedBy": "dummy_6",
            "Modified": "6/28/2020, 24:28:32",
            "LeaseType": "dummy_8",
            "Created_At": "10/13/2019, 19:44:49",
            "Updated_at": "5/5/2015, 21:52:52"
         }
      ],
      "transaction": [
         {
            "space_size": 2.33,
            "primary_tenant": "dummy_4",
            "lettable_area": 8.77,
            "date": "10/21/2021, 10:33:48",
            "usage_list": "dummy_7",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_9",
            "floor": "dummy_9",
            "ID": 5
         },
         {
            "space_size": 5.05,
            "primary_tenant": "dummy_7",
            "lettable_area": 3.65,
            "date": "11/6/2017, 14:48:40",
            "usage_list": "dummy_7",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_4",
            "floor": "dummy_4",
            "ID": 0
         },
         {
            "space_size": 5.08,
            "primary_tenant": "dummy_7",
            "lettable_area": 2.3,
            "date": "10/1/2016, 15:03:27",
            "usage_list": "dummy_7",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_5",
            "floor": "dummy_8",
            "ID": 6
         },
         {
            "space_size": 2.32,
            "primary_tenant": "dummy_2",
            "lettable_area": 4.49,
            "date": "9/27/2022, 23:18:02",
            "usage_list": "dummy_8",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_6",
            "floor": "dummy_9",
            "ID": 4
         },
         {
            "space_size": 2.79,
            "primary_tenant": "dummy_3",
            "lettable_area": 3.39,
            "date": "9/10/2017, 24:02:56",
            "usage_list": "dummy_1",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_5",
            "floor": "dummy_8",
            "ID": 0
         }
      ]
   }
},
"outJsonCascade" : {
   "SortOrder": "dummy_1",
   "SpaceID": "dummy_6",
   "Floor": "dummy_3",
   "FloorID": "dummy_8",
   "BuildingName_x": "dummy_8",
   "SpaceName": "dummy_6",
   "po_floor_3D": {
      "floorplan_url": "dummy_2"
   },
   "lists": {
      "lease_info": [
         {
            "Updated_At": "8/5/2015, 16:00:44",
            "ID": 0,
            "Property_ID_x": "dummy_8",
            "BuildingName_x": "dummy_2",
            "PropertyType_x": "dummy_7",
            "FloorID_x": "dummy_9",
            "Floor_x": "dummy_7",
            "SortOrder_x": "dummy_6",
            "SpaceID_x": "dummy_4",
            "SpaceName_x": "dummy_0",
            "SpaceArea(Sqft)_x": "dummy_2",
            "PossessionStatus_x": "dummy_0",
            "SpaceStatus_x": "dummy_8",
            "LeaseTitle": "dummy_4",
            "LeaseID": "dummy_1",
            "LeasePropertyType": "dummy_8",
            "CurrentLease": "dummy_7",
            "CBREDeal": "dummy_2",
            "ThirdPartyAgent": "dummy_2",
            "PrimaryTenantAccount": "dummy_1",
            "CommencementDate": "2/6/2021, 07:54:27",
            "ExpiryDate": "9/19/2015, 15:28:35",
            "TransactionDate": "11/24/2021, 08:23:16",
            "LeaseTerm": "dummy_3",
            "LeaseArea": "dummy_7",
            "CreatedBy": "dummy_0",
            "Created": "10/8/2017, 17:43:49",
            "ModifiedBy": "dummy_3",
            "Modified": "1/31/2020, 13:50:06",
            "LeaseType": "dummy_2",
            "Created_At": "12/21/2022, 23:03:03",
            "Updated_at": "1/5/2018, 04:53:38"
         },
         {
            "Updated_At": "7/22/2016, 06:16:25",
            "ID": 1,
            "Property_ID_x": "dummy_4",
            "BuildingName_x": "dummy_0",
            "PropertyType_x": "dummy_4",
            "FloorID_x": "dummy_5",
            "Floor_x": "dummy_1",
            "SortOrder_x": "dummy_8",
            "SpaceID_x": "dummy_0",
            "SpaceName_x": "dummy_5",
            "SpaceArea(Sqft)_x": "dummy_7",
            "PossessionStatus_x": "dummy_6",
            "SpaceStatus_x": "dummy_4",
            "LeaseTitle": "dummy_4",
            "LeaseID": "dummy_0",
            "LeasePropertyType": "dummy_1",
            "CurrentLease": "dummy_3",
            "CBREDeal": "dummy_9",
            "ThirdPartyAgent": "dummy_8",
            "PrimaryTenantAccount": "dummy_0",
            "CommencementDate": "4/18/2015, 05:53:46",
            "ExpiryDate": "3/19/2020, 12:57:59",
            "TransactionDate": "12/25/2018, 06:13:56",
            "LeaseTerm": "dummy_2",
            "LeaseArea": "dummy_1",
            "CreatedBy": "dummy_3",
            "Created": "5/10/2017, 03:16:05",
            "ModifiedBy": "dummy_8",
            "Modified": "1/15/2021, 14:41:54",
            "LeaseType": "dummy_9",
            "Created_At": "11/29/2015, 12:13:45",
            "Updated_at": "1/8/2016, 21:02:19"
         },
         {
            "Updated_At": "12/17/2021, 15:57:41",
            "ID": 9,
            "Property_ID_x": "dummy_3",
            "BuildingName_x": "dummy_2",
            "PropertyType_x": "dummy_0",
            "FloorID_x": "dummy_4",
            "Floor_x": "dummy_5",
            "SortOrder_x": "dummy_6",
            "SpaceID_x": "dummy_5",
            "SpaceName_x": "dummy_3",
            "SpaceArea(Sqft)_x": "dummy_6",
            "PossessionStatus_x": "dummy_0",
            "SpaceStatus_x": "dummy_4",
            "LeaseTitle": "dummy_3",
            "LeaseID": "dummy_3",
            "LeasePropertyType": "dummy_7",
            "CurrentLease": "dummy_0",
            "CBREDeal": "dummy_9",
            "ThirdPartyAgent": "dummy_2",
            "PrimaryTenantAccount": "dummy_0",
            "CommencementDate": "3/5/2021, 07:26:12",
            "ExpiryDate": "1/3/2018, 20:19:08",
            "TransactionDate": "5/24/2017, 23:39:49",
            "LeaseTerm": "dummy_2",
            "LeaseArea": "dummy_8",
            "CreatedBy": "dummy_6",
            "Created": "12/22/2017, 23:17:34",
            "ModifiedBy": "dummy_2",
            "Modified": "10/2/2020, 20:29:52",
            "LeaseType": "dummy_4",
            "Created_At": "2/29/2020, 06:26:41",
            "Updated_at": "12/6/2021, 18:19:30"
         },
         {
            "Updated_At": "7/14/2018, 20:48:35",
            "ID": 2,
            "Property_ID_x": "dummy_3",
            "BuildingName_x": "dummy_5",
            "PropertyType_x": "dummy_0",
            "FloorID_x": "dummy_5",
            "Floor_x": "dummy_6",
            "SortOrder_x": "dummy_2",
            "SpaceID_x": "dummy_7",
            "SpaceName_x": "dummy_5",
            "SpaceArea(Sqft)_x": "dummy_9",
            "PossessionStatus_x": "dummy_1",
            "SpaceStatus_x": "dummy_2",
            "LeaseTitle": "dummy_9",
            "LeaseID": "dummy_5",
            "LeasePropertyType": "dummy_3",
            "CurrentLease": "dummy_4",
            "CBREDeal": "dummy_9",
            "ThirdPartyAgent": "dummy_5",
            "PrimaryTenantAccount": "dummy_6",
            "CommencementDate": "11/24/2019, 06:20:58",
            "ExpiryDate": "6/7/2015, 16:29:54",
            "TransactionDate": "11/20/2020, 10:33:14",
            "LeaseTerm": "dummy_6",
            "LeaseArea": "dummy_6",
            "CreatedBy": "dummy_5",
            "Created": "7/26/2019, 10:46:26",
            "ModifiedBy": "dummy_4",
            "Modified": "4/22/2019, 20:11:47",
            "LeaseType": "dummy_0",
            "Created_At": "8/27/2016, 03:30:42",
            "Updated_at": "1/3/2018, 22:28:20"
         },
         {
            "Updated_At": "10/5/2019, 14:35:49",
            "ID": 8,
            "Property_ID_x": "dummy_7",
            "BuildingName_x": "dummy_4",
            "PropertyType_x": "dummy_5",
            "FloorID_x": "dummy_9",
            "Floor_x": "dummy_2",
            "SortOrder_x": "dummy_4",
            "SpaceID_x": "dummy_8",
            "SpaceName_x": "dummy_7",
            "SpaceArea(Sqft)_x": "dummy_8",
            "PossessionStatus_x": "dummy_6",
            "SpaceStatus_x": "dummy_4",
            "LeaseTitle": "dummy_7",
            "LeaseID": "dummy_0",
            "LeasePropertyType": "dummy_0",
            "CurrentLease": "dummy_2",
            "CBREDeal": "dummy_3",
            "ThirdPartyAgent": "dummy_4",
            "PrimaryTenantAccount": "dummy_0",
            "CommencementDate": "7/29/2021, 19:07:19",
            "ExpiryDate": "9/5/2017, 07:09:49",
            "TransactionDate": "11/7/2020, 13:29:17",
            "LeaseTerm": "dummy_1",
            "LeaseArea": "dummy_7",
            "CreatedBy": "dummy_6",
            "Created": "1/16/2020, 19:57:24",
            "ModifiedBy": "dummy_4",
            "Modified": "1/9/2017, 24:56:26",
            "LeaseType": "dummy_7",
            "Created_At": "4/17/2022, 05:21:00",
            "Updated_at": "9/3/2021, 20:26:29"
         }
      ],
      "transaction": [
         {
            "space_size": 5.47,
            "primary_tenant": "dummy_8",
            "lettable_area": 4.9,
            "date": "4/15/2019, 18:06:50",
            "usage_list": "dummy_2",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_8",
            "floor": "dummy_6",
            "ID": 2
         },
         {
            "space_size": 5.36,
            "primary_tenant": "dummy_4",
            "lettable_area": 6.84,
            "date": "9/21/2019, 22:48:17",
            "usage_list": "dummy_0",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_4",
            "floor": "dummy_6",
            "ID": 0
         },
         {
            "space_size": 5.46,
            "primary_tenant": "dummy_0",
            "lettable_area": 4.48,
            "date": "11/10/2016, 11:11:03",
            "usage_list": "dummy_9",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_0",
            "floor": "dummy_1",
            "ID": 8
         },
         {
            "space_size": 8.13,
            "primary_tenant": "dummy_4",
            "lettable_area": 8.5,
            "date": "11/6/2016, 07:18:53",
            "usage_list": "dummy_2",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_5",
            "floor": "dummy_6",
            "ID": 5
         },
         {
            "space_size": 1.89,
            "primary_tenant": "dummy_6",
            "lettable_area": 3,
            "date": "9/19/2022, 14:51:08",
            "usage_list": "dummy_7",
            "entity": "undefined",
            "type": "undefined",
            "unit_id": "dummy_1",
            "floor": "dummy_2",
            "ID": 4
         }
      ]
   }
}
}
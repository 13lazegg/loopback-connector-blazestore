# loopback-connector-blazestore
Firestore connector for the LoopBack framework.

[![npm](https://img.shields.io/npm/dt/loopback-connector-blazestore.svg)](https://www.npmjs.com/package/loopback-connector-blazestore)
[![npm](https://img.shields.io/npm/v/loopback-connector-blazestore.svg)](https://www.npmjs.com/package/loopback-connector-blazestore)
[![npm](https://img.shields.io/npm/l/loopback-connector-blazestore.svg)](https://github.com/13lazegg/loopback-connector-blazestore)

### Installation

Create a new database

Then you should use a service account. Go to [Project Settings > Service Accounts][2] in the Google Cloud Platform Console. Generate a new private key and save the JSON file.

You should fill the application's datasource file which is located in `/server/datasources.json`  with those details, You can find them in the downloaded JSON file from the Google Cloud Platform.

```javascrpt
"firestore": {
  "name": "<the_name_of_your_database>",
  "connector": "loopback-connector-blazestore",
  "projectId": "",
  "clientEmail":  "",
  "privateKey": "",
  "databaseName": "" // Optional, Default: projectId
}
```

#### Connection properties

| Property | Type&nbsp;&nbsp; | Description | --- |
| --- | --- | --- | --- |
| projectId | String | project_id in the JSON file | --- |
| clientEmail | String | client_email in the JSON file | --- |
| privateKey | String | private_key in the JSON file | --- |
| databaseName | String | Firebase's project id | Optional, Default: projectId | --- |

And you can actually store those private details as an Environment variables, Check [source-configuration][3]

### License

Copylefted (c) 2017 Rodrigo Gonzalez Godoy Licensed under the [MIT license][1].
  
  [1]: https://github.com/13lazegg/loopback-connector-blazestore/blob/master/LICENSE
  [2]: https://console.cloud.google.com/projectselector/iam-admin/serviceaccounts
  [3]: https://loopback.io/doc/en/lb3/Environment-specific-configuration.html#data-source-configuration

// This file has been autogenerated.
var profile = require('../../lib/util/profile');
exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'db1ab6f0-4769-4b27-930e-01e2ef9c123c',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure SDK sandbox',
    username: 'user@domain.example',
    registeredProviders: ['website', 'sqlserver'],
    registeredResourceNamespaces: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.scopes = [
    /*create from VM*/
    [
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/disks/xplattestvm-xplattestvm-0-201311220521540165')
                .reply(200, "<Disk xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><OS>Linux</OS><Label>xplattestvm-xplattestvm-0-201311220521540165</Label><Location>West US</Location><LogicalDiskSizeInGB>10</LogicalDiskSizeInGB><MediaLink>http://acsforsdk2.blob.core.windows.net/vhds/xplattestvm-xplattestvm-0-201311220521540165.vhd</MediaLink><Name>xplattestvm-xplattestvm-0-201311220521540165</Name><IsPremium>false</IsPremium></Disk>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '350',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.12 (rd_rdfe_stable.131001-0757) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : 'e35f366509f81369badd171d37d21063',
                    date : 'Mon, 14 Oct 2013 15:08:58 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
                .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm1</ServiceName><HostedServiceProperties><Description>Implicitly created hosted service</Description><Location>West US</Location><Label>eHBsYXR0ZXN0dm0=</Label><Status>Created</Status><DateCreated>2013-11-22T05:21:47Z</DateCreated><DateLastModified>2013-11-22T05:22:06Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '4051',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : '5d885d0c15de3972b157f08150763761',
                    date : 'Fri, 22 Nov 2013 05:21:37 GMT'
                });
            return result;
        },
        function (nock) {
            var result =
                nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/locations')
                .reply(200, "<Locations xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Location><Name>East Asia</Name><DisplayName>East Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>Southeast Asia</Name><DisplayName>Southeast Asia</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>North Europe</Name><DisplayName>North Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>West Europe</Name><DisplayName>West Europe</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>East US</Name><DisplayName>East US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location><Location><Name>North Central US</Name><DisplayName>North Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService></AvailableServices></Location><Location><Name>South Central US</Name><DisplayName>South Central US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService></AvailableServices></Location><Location><Name>West US</Name><DisplayName>West US</DisplayName><AvailableServices><AvailableService>Compute</AvailableService><AvailableService>Storage</AvailableService><AvailableService>PersistentVMRole</AvailableService><AvailableService>HighMemory</AvailableService></AvailableServices></Location></Locations>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '2413',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : 'c6b61dd1e42a3581b07792eb93a77d35',
                    date : 'Thu, 21 Nov 2013 13:48:36 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .filteringRequestBody(function (path) {
                    return '*';
                })
                .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices', '*')
                .reply(201, "", {
                    'cache-control' : 'no-cache',
                    'content-length' : '0',
                    location : 'https://management.core.windows.net/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/compute/Azure_Vm_Export',
                    server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : '7613f221a14e3824b96c8f5f5225d712',
                    date : 'Mon, 25 Nov 2013 05:56:27 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/7613f221a14e3824b96c8f5f5225d712')
                .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7613f221-a14e-3824-b96c-8f5f5225d712</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '232',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : 'd87bc96d9e953a5aa4714778c84350bb',
                    date : 'Mon, 25 Nov 2013 05:56:29 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .filteringRequestBody(function (path) {
                    return '*';
                })
                .post('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deployments', "*")
                .reply(202, "", {
                    'cache-control' : 'no-cache',
                    'content-length' : '0',
                    server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : '872c6309016d3f6da2fc87faedfbb792',
                    date : 'Fri, 22 Nov 2013 05:21:52 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/operations/872c6309016d3f6da2fc87faedfbb792')
                .reply(200, "<Operation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7613f221-a14e-3824-b96c-8f5f5225d712</ID><Status>Succeeded</Status><HttpStatusCode>200</HttpStatusCode></Operation>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '232',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.27 (rd_rdfe_stable.131122-1638) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : 'd87bc96d9e953a5aa4714778c84350bb',
                    date : 'Mon, 25 Nov 2013 05:56:29 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices')
                .reply(200, "<HostedServices xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><HostedService><Url>https://management.core.windows.net/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/services/hostedservices/xplattestvm</Url><ServiceName>xplattestvm</ServiceName><HostedServiceProperties><Description i:nil=\" true \"/><Location>West US</Location><Label>QUNTU2VydmljZQ==</Label><Status>Created</Status><DateCreated>2013-10-31T12:22:34Z</DateCreated><DateLastModified>2013-11-21T13:23:12Z</DateLastModified><ExtendedProperties/></HostedServiceProperties></HostedService></HostedServices>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '4051',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : '5d885d0c15de3972b157f08150763761',
                    date : 'Fri, 22 Nov 2013 05:21:37 GMT'
                });
            return result;
        },
        function (nock) {
            var result = nock('https://management.core.windows.net:443')
                .get('/db1ab6f0-4769-4b27-930e-01e2ef9c123c/services/hostedservices/xplattestvm/deploymentslots/Production')
                .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>No deployments were found.</Message></Error>", {
                    'cache-control' : 'no-cache',
                    'content-length' : '2445',
                    'content-type' : 'application/xml; charset=utf-8',
                    server : '1.0.6198.25 (rd_rdfe_stable.131118-1436) Microsoft-HTTPAPI/2.0',
                    'x-ms-servedbyregion' : 'ussouth',
                    'x-ms-request-id' : '23b475bd87883e1e9335b43052357f49',
                    date : 'Fri, 22 Nov 2013 05:22:18 GMT'
                });
            return result;
        }
    ]
]

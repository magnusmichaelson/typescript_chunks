var data = ['123','456'];
download(data,'data.json');

function download(data: any,filename: string){
    var jsonData: any;
    var encodedData: any;
    var download: any;
    jsonData = JSON.stringify(data, null, 2);
    encodedData = 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonData);
    download = document.createElement('a');
    download.setAttribute('href', encodedData );
    download.setAttribute('download', filename);
    document.body.appendChild(download);
    download.click();
    document.body.removeChild(download);
}
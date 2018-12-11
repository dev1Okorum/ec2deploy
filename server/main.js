import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
Meteor.startup(() => {
  try {
    // const basicAuthentication = Buffer
    //     .from(`${'user_test'}:${'user_test'}`)
    //     .toString('base64');
    //
    //   // Build url;
    //   const url = `${'http'}://${'172.20.29.94'}${'port' ? `:${8085}` : ''}/`;
    //
    //   // Setup request options;
    //   const requestOptions = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Basic ${basicAuthentication}`,
    //     },
    //     timeout: 6000,
    //     query: `fecha_inicial=${'30/09/2018'} 00:00:00&fecha_final=${'30/09/2018'} 23:59:59`,
    //   };
    //
    //     // Perform request;
    //     console.log(url);
    //     console.log(requestOptions);
    //     const response = HTTP.get(url, requestOptions);
    //     console.log(response);
  } catch (e) {
    console.log(e);
  }


// const callOptions={
//   header: "Authorization: Basic dXNlcl90ZXN0OnVzZXJfdGVzdA=="
// },
//   const response = HTTP.get("http://172.20.29.94:8085/?fecha_final=30/09/2018 23:59:59&fecha_inicial=30/09/2018 00:00:00");

});

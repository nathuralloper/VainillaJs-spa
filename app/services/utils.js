
const Utils = {

    parseRequestURL : () => {
    
        let url = location.hash.slice(1).toLowerCase() || '/';
        console.log(url);

        let r = url.split('/');
        
        let request = {
            resource: null,
            id: null,
            verb: null
        };

        request.resource = r[0];
        request.id = r[1];
        request.verb = r[2];

        console.log(request);
        return request;
        
    },
    sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

};

export default Utils;
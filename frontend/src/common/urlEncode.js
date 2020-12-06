export default function urlEncode(req, payload){
    let formBody = [];
    for (let property in payload) {
        let encodedKey = encodeURIComponent(property);
        let encodedValue = encodeURIComponent(payload[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    let type = {
        method: req,
        headers: {
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    };

    return type
}

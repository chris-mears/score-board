export function setStorage(key: string, value: any) {
    let stringValue = value;
    if(typeof value !== 'string') {
        console.log('Not String')
        stringValue = JSON.stringify(value);
    }
    localStorage.setItem(key, stringValue);
}
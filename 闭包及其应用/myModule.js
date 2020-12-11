function myModule() {
    var msg = 'text';
    function doSome() {
        console.log('something' + msg);
    };
    function doOther() {
        console.log('otherthing' + msg);
    };

    return {
        doSomeThing: doSome,
        doOtherThing: doOther, 
    }
}
class Database {
    constructor() {
        this.Database = this.onGetDatabase();
    }
    onGetDatabase() {
        this.Database = JSON.parse(localStorage.getItem('users'));
        if(this.Database == null) this.Database = [];
        return this.Database;
        }
        
    onSaveDatabase() {
        if (this.Database == null) return;
        localStorage.setItem('users', JSON.stringify(this.Database));
    }   
    onInsertIntoDatebase(newDataBase) {
        this.Database.push(newDataBase);
        this.onSaveDatabase();
    }
    onGetUserID() {
        let id = JSON.parse(localStorage.getItem('id'));
        return id;
    }
    onSetUserName(userName) {
        this.Database[this.onGetUserID].userName = userName;
        this.onSaveDatabase();
    }
    onGetUserName(id = this.onGetUserID) {
        return this.Database[id].userName;
    }
    onGetLogin(id = this.onGetUserID) {
        return this.Database[id].regLogin;
    }
    onGetPassword(id = this.onGetUserID) {
        return this.Database[id].regPass;
    }
    onGetLength() {
        return this.Database.length;
    }
}
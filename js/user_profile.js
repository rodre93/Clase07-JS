class UserProfile {
    constructor(){
        this.darkmode = false;
        this.languaje = "es";
    }


    save(){
        let objeto1 = { darkmode: this.darkmode , languaje : this.languaje};
    localStorage.setItem("UserProfile", JSON.stringify(objeto1));
    }

    load() {
        let loaded_darkmode = localStorage.getItem("UserProfile");

        if (loaded_darkmode != null){
            let loaded_darkmode_JSON = JSON.parse(loaded_darkmode);
            this.darkmode = loaded_darkmode_JSON.darkmode;
            this.languaje = loaded_darkmode_JSON.languaje;
        }
    }
}
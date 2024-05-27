import { registerPI1002Settings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing Torganisiertes Spiel - Der Preis des Ruhms Module");

    //-----system settings
    registerPI1002Settings()

})
Hooks.on("ready", async function() {
    //----rendering welcome message

    let welcomeMessage = await renderTemplate("modules/pi1002-der-preis-des-ruhms/welcomeMessage.hbs");

    if (game.settings.get("pi1002-der-preis-des-ruhmsX", "welcomeMessage")) {
        let d = new Dialog({
            title: game.i18n.localize("PI1002.Title"),
            content: welcomeMessage,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: game.i18n.localize("PI1002.Init.Button.OK"),
                },
                two: {
                    icon: '<i class="fas fa-ban"></i>',
                    label: game.i18n.localize("PI1002.Init.Button.DontShowAgain"),
                    callback: () =>
                        game.settings.set("pi1002-der-preis-des-ruhms", "welcomeMessage", false),
                },
            },
        }, {
            left: 100,
            top: 100,
            height: 425,
            width: 450,
            resizable: false
        });
        d.render(true);
    }


})
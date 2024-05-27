export function registerPI1002Settings() {

    game.settings.register("pi1002-der-preis-des-ruhms", "welcomeMessage", {
        name: game.i18n.localize("PI1002.Settings.welcomeMessage.Name"),
        hint: game.i18n.localize("PI1002.Settings.welcomeMessage.Hint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

}
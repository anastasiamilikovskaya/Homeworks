function getString() {
    let skill = {
        name: 'html',
        level: 5,
        full: function () {
            return this.name + " - " + this.level;
        }
    }
    return skill.full();
}

export { getString };
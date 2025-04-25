function Emmiter() {
    this.events = {};
}

Emmiter.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};

Emmiter.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(function(element) {
            element();
        });
    }
};

let emitr = new Emmiter();

emitr.on('greet', () => {
    console.log("on emitter function run");
});

emitr.on('greet', () => {
    console.log('A greeting occurred');
});

emitr.emit('greet');

console.log(em)

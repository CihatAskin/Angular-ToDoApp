export class Model {
    user;
    items;

    constructor() {
        this.user = 'Cihat';
        this.items = [
            new TodoItem('Developing', false),
            new TodoItem('Breakfast', false),
            new TodoItem('Developing', true),
            new TodoItem('Social', false),
            new TodoItem('Spor', false)
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.action = action;
        this.description = description;
    }
}
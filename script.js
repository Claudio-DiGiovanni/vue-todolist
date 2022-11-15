new Vue ({
    el: "#app",
    data: {
        arrTodo: [
            {
                text: "fare la spesa",
                done: false,
            },
            {
                text: "fare le pulizie",
                done: true,
            },
            {
                text: "comprare l'olio",
                done: false,
            },
        ],
        newTodo: ""
    },
    methods: {
        addTodo(newText) {
            newTodo = {
                text: newText,
                done: false
            };
            this.arrTodo.push(newTodo);
            this.newTodo = "";
        },
        checked(i) {
            console.log("cliccatos")
            console.log(this.arrTodo[i])
            this.arrTodo[i].done = !this.arrTodo[i].done
        },
        removeTodo(index) {
            this.arrTodo.splice(index, 1)
        }
    }
})
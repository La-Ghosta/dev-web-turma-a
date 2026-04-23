const { createApp } = Vue;

createApp({
  data() {
    return {
      novaTarefa: "",
      tarefas: []
    };
  },
  methods: {
    adicionarTarefa() {
      const texto = this.novaTarefa.trim();
      if (texto === "") return;
      this.tarefas.push({
        texto: texto,
        concluida: false
      });
      this.novaTarefa = "";
    },
    removerTarefa(index) {
      this.tarefas.splice(index, 1);
    }
  }
}).mount("#app");
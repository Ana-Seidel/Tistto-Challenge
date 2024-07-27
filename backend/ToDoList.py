# Armazena as tarefas
tasks = {}

# Adiciona uma tarefa
def add_task(task_name):
    task_id = len(tasks) + 1
    tasks[task_name] = {"name": task_name, "completed": False}

# Lista de tarefas com o status
def list_tasks():
    if not tasks:
        print("Nenhuma tarefa foi adicionada")
    else:
        for task_id, task in tasks.items():
            status = "Tarefa concluída" if task["completed"] else "Pendente"
            print(f"{task_id}: {task['name']} - {status}")

# Marca a tarefa concluída
def complete_task(task_id):
    if task_id in tasks:
        tasks[task_id]["completed"] = True
        print(f"Tarefa '{tasks[task_id]['name']}' marcada como concluída!")
    else:
        print(f"Tarefa com ID {task_id} não encontrada.")

# Remove a tarefa
def remove_task(task_id):
    if task_id in tasks:
        del tasks[task_id]
        print(f"Tarefa com ID {task_id} removida!")
    else:
        print(f"Tarefa com ID {task_id} não encontrada.")
        

def main():
    while True:
        print("\nOpções:")
        print("1. Adicionar tarefa")
        print("2. Listar tarefas")
        print("3. Marcar tarefa como concluída")
        print("4. Remover tarefa")
        print("5. Sair")

        choice = input("Selecione uma opção: ")

        if choice == '1':
            task_name = input("Nome da tarefa: ")
            add_task(task_name)
        elif choice == '2':
            list_tasks()
        elif choice == '3':
            task_id = int(input("ID da tarefa a ser marcada como concluída: "))
            complete_task(task_id)
        elif choice == '4':
            task_id = int(input("ID da tarefa a ser removida: "))
            remove_task(task_id)
        elif choice == '5':
            print("Saindo...")
            break
        else:
            print("Opção inválida, tente novamente.")

if __name__ == "__main__":
    main()

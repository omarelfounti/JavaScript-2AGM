# Pedimos al usuario su animal favorito
animal = input("¿Cuál es tu animal favorito?: ").lower()

# Respuestas personalizadas según el animal elegido
if animal == "león":
    print("El león es el rey de la selva, fuerte y majestuoso.")
elif animal == "águila":
    print("El águila tiene una visión impresionante y vuela a grandes alturas.")
elif animal == "delfín":
    print("Los delfines son increíblemente inteligentes y sociables.")
elif animal == "jirafa":
    print("Las jirafas son muy altas y tienen un cuello increíblemente largo.")
elif animal == "tigre":
    print("El tigre es un cazador sigiloso y poderoso.")
else:
    print(f"No sé mucho sobre los {animal}s, pero suenan fascinantes.")








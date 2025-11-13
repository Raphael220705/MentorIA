from google import genai

# Substitua pela sua API Key do AI Studio / Gemini
API_KEY = "AIzaSyAiZHHYoRxa0Hlc3ionowzVtNGZ3b6eg9o"

client = genai.Client(api_key=API_KEY)

def listar_modelos():
    modelos = client.models.list()
    print("Modelos disponíveis para sua chave:")
    for m in modelos:
        # Mostra nome, display_name e descrição resumida
        print(f"- Nome: {m.name}")
        print(f"  Display Name: {m.display_name}")
        if hasattr(m, "description"):
            print(f"  Descrição: {m.description}")
        print("-" * 40)

if __name__ == "__main__":
    listar_modelos()
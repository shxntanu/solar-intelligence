from googletrans import Translator

def translate_text(text, target_lang):
    translator = Translator()
    translated_text = translator.translate(text, dest=target_lang)
    return translated_text.text
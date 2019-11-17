import sys

import spacy

# part of speech tagging

def part_of_speech(target):
  nlp = spacy.load("en_core_web_sm")

  doc = nlp(target)

  '''
  Text: The original word text.
  Lemma: The base form of the word.
  POS: The simple part-of-speech tag.
  Tag: The detailed part-of-speech tag.
  Dep: Syntactic dependency, i.e. the relation between tokens.
  Shape: The word shape – capitalization, punctuation, digits.
  is alpha: Is the token an alpha character?
  is stop: Is the token part of a stop list, i.e. the most common words of the language?
  '''

  


  for token in doc:
    print(
    f"""
      text: {token.text}
      lemma: {token.lemma_}
      position: {token.pos_}
      tag: {token.tag}
      dep: {token.dep_}
      shape: {token.shape}
      is_alpha: {token.is_alpha}
      is_stop: {token.is_stop}
      --------------------------------
    """)


if __name__ == "__main__":
  part_of_speech(sys.argv[1])


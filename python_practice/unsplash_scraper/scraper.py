import os, sys





def image_scrape(keyword):
  path = '/Users/alexandrgaiser/unsplash/' + keyword


  IMGFOLDER = os.path.abspath(path)

  print(IMGFOLDER)



if __name__ == "__main__":
  image_scrape(sys.argv[1])
import urllib.request
import re
import os

urls = {
    "igl-connect": "https://play.google.com/store/apps/details?id=com.CustomerApp",
    "amala-earth": "https://play.google.com/store/apps/details?id=com.amala.earth",
    "fojfit": "https://play.google.com/store/apps/details?id=com.fitnessapp.fitness_app",
    "healium": "https://apps.apple.com/in/app/healium-camps/id6474176316",
    "iid": "https://play.google.com/store/apps/details?id=com.iid"
}

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

os.makedirs('public/projects', exist_ok=True)

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'<meta (?:property|name)="og:image" content="(.*?)"', html)
        if match:
            img_url = match.group(1)
            if img_url.startswith('//'):
                img_url = 'https:' + img_url
            print(f"Downloading {name} from {img_url}")
            img_req = urllib.request.Request(img_url, headers=headers)
            img_data = urllib.request.urlopen(img_req).read()
            with open(f"public/projects/{name}.png", "wb") as f:
                f.write(img_data)
        else:
            print(f"Could not find og:image for {name}")
    except Exception as e:
        print(f"Error fetching {name}: {e}")

# Slate Grades
> Browser extension that shows your grades in D2L!

---

## Usage
Just install it as a normal browser addon and it should modify the "Grades" page of D2L to show current grades

<br/>

## Installation
The packages should be in the app store of your respected browser. If not there are packages in this repo which you can install manually.

#### Firefox
1. Download the `d2l_grades-1.0-fx.xpi` file.
2. In Firefox, go to __Addons__ ([Ctrl+Shft+A])
3. Click the gears in the top right -> __Install Add-on From File__
4. Find the `.xpi` package, select it, click __Add__ on the popup
5. Congrats! Go check your grades in D2L!

#### Chrome
1. Clone this repo _OR_ download `d2lgrades.chrome.zip` file and unzip it to a folder. From here we'll assume the unzipped/cloned contents are in `~/D2LGrades/Chrome/`
2. Go to `chrome://extensions` and check __Developer Mode__ in the top right.
3. Click __Load Unpacked__ and select the `~/D2LGrades/Chrome/` folder (There should be a `manifest.json` file in it).
4. Congrats! A new extension "D2L Grades 1.0" should have popped up. Go check out your grades now!

<br/>

## Support
> Only certain sites, browsers, etc... are supported

#### Browsers
Currently only the following browsers are supported:
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/d2lgrades/)
- Chrome (There isn't a link right now; Pending approval by Chrome Web Store)

#### Sites
Currently only the following sites are supported:
- Sheridan

<br/>

## Limitations
- D2L isn't standardized, so the addon might not work for some courses. If the grades table's columns follow the order:
```
"Grade Item", "Points", "Weight Achieved", "Grade"
```
Then it should be fine.

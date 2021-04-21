# Slate Grades
> Browser extension that shows your grades in D2L!

---

## Usage
>Just install it as a normal browser addon and it should modify the "Grades" page of D2L to show current grades.

The addon will modify the page (hence the scary warning about using data from the sites) and add the calculated grade beside the "Grade" header.

PICTURE

It will also add a row to the table with information on the calculated marks:
| Grade Item | Points | Weight Achieved | Grade |
| --- | --- | --- | --- |
| Title of row | Existing weights | Your score out of he existing weights | Calculated grade |

__Note:__ If the _Points_ column isn't 100/100, then your missing some marks; The prof might not have posted the marks yet. Better get on that!

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

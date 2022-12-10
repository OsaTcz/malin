monthnames = new Array(
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień");
    var linkcount=0;
    function addlink(month, day, href) {
    var entry = new Array(3);
    entry[0] = month;
    entry[1] = day;
    entry[2] = href;
    this[linkcount++] = entry;
    }
    Array.prototype.addlink = addlink;
    linkdays = new Array();
    monthdays = new Array(12);
    monthdays[0]=31;
    monthdays[1]=28;
    monthdays[2]=31;
    monthdays[3]=30;
    monthdays[4]=31;
    monthdays[5]=30;
    monthdays[6]=31;
    monthdays[7]=31;
    monthdays[8]=30;
    monthdays[9]=31;
    monthdays[10]=30;
    monthdays[11]=31;

    todayDate = new Date();
    thisday = todayDate.getDay();
    thismonth = todayDate.getMonth();
    thisdate = todayDate.getDate();
    thisyear = todayDate.getYear();
    thisyear = thisyear % 100;
    thisyear = ((thisyear < 50) ? (2000 + thisyear) : (1900 + thisyear));

    if (((thisyear % 4 == 0) && !(thisyear % 100 == 0))
    ||(thisyear % 400 == 0)) monthdays[1]++;
    startspaces=thisdate;

    while (startspaces > 7) 
    startspaces -=7;
    startspaces = thisday - startspaces + 1;

    if (startspaces < 0) startspaces+=7;
        document.write("<table border=2 bgcolor=white ");
        document.write("bordercolor=black><font color=#000000>");
        document.write("<tr><td colspan=7><center><strong>" + monthnames[thismonth] + " " + thisyear + "</strong></center></font></td></tr>");
        document.write("<tr>");
        document.write("<td align=center>N</td>");
        document.write("<td align=center>P</td>");
        document.write("<td align=center>W</td>");
        document.write("<td align=center>Sr</td>");
        document.write("<td align=center>C</td>");
        document.write("<td align=center>P</td>");
        document.write("<td align=center>So</td>");
        document.write("</tr>");
        document.write("<tr>");

    for (s=0; s<startspaces; s++) 
    {
        document.write("<td> </td>");
    }
    count=1;
    
    while (count <= monthdays[thismonth]) 
    {
        for (b = startspaces;b<7;b++) 
        {
        linktrue=false;
        document.write("<td>");
        for (c=0;c<linkdays.length;c++) 
        {
            if (linkdays[c] != null) 
            {
                if ((linkdays[c][0]==thismonth + 1) && (linkdays[c][1]==count)) 
                {
                    document.write("<a href=\"" + linkdays[c][2] + "\">");
                    linktrue=true;
                 }
            }
        }
        if (count==thisdate) {
        document.write("<font color='#FF0000'><strong>");
        }
        if (count <= monthdays[thismonth]) {
        document.write(count);
        }
        else {
        document.write(" ");
        }
        if (count==thisdate) {
        document.write("</strong></font>");
        }
        if (linktrue)
        document.write("</a>");
        document.write("</td>");
        count++;
        }
        document.write("</tr>");
        document.write("<tr>");
        startspaces=0;
    }
    document.write("</table>");
    
    var tday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            var tmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     function getWeekNumber(d) {
              // Copy date so don't modify original
              d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
              // Set to nearest Thursday: current date + 4 - current day number
              // Make Sunday's day number 7
              d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
              // Get first day of year
              var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
              // Calculate full weeks to nearest Thursday
    
              var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
              
              // Return array of year and week number
              return [d.getUTCFullYear(), weekNo];
            }
            function GetClock() {
              var d = new Date();
              var nday = d.getDay(),
                nmonth = d.getMonth(),
                ndate = d.getDate(),
                nyear = d.getFullYear();
              var nhour = d.getHours(),
                nmin = d.getMinutes(),
                nsec = d.getSeconds();
              if (nmin <= 9) nmin = "0" + nmin;
              if (nsec <= 9) nsec = "0" + nsec;
    
              var clocktext = "" + tday[nday] + ", " + ndate + " " + tmonth[nmonth] + ", " + nyear + " " + nhour + ":" + nmin + ":" + nsec + "";
              document.getElementById('clockbox').innerHTML = clocktext; 
            }
           
    var result = getWeekNumber(new Date());
    
           var x =  document.write('It\'s currently week '+ "<b id='lik' >" + result[1] + "</b>"+ ' of ' + result[0]);
    document.getElementById('lik').style.color='red';
        function czas(){
    
              //generate clock animations
              var now = new Date(),
                hourDeg = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
                minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
                secondDeg = now.getSeconds() / 60 * 360,
                stylesDeg = [
                  "@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                  "@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                  "@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
                  "@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
                  "@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
                  "@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
                ].join("");  
    
              document.getElementById("clock-animations").innerHTML = stylesDeg; 
    
            }
    
    
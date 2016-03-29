[cmdletbinding()]
param([string[]]$To)


cd C:\Users\me\Documents\Repositories\Playground\Nightwatch\
try {
	node nightwatch.js -e chrome
} catch {
	
}
Send-MailMessage -From me@yopmail.com -To $to -Attachments .\reports\CHROME_49.0.2623.87_XP_checkout.test.xml -Subject 'Nightwatch.js Results' -Body 'See attachments.' -SmtpServer 'smtp.mydomain.local'
[cmdletbinding()]
param([string[]]$To)

$username = "firstname.lastname"
$domain = "domain"

$email = $username + '@' + $domain + '.com'
$path = 'C:\Users\' + $username + '\Documents\Repositories\Playground\Nightwatch\'
$smtp = 'smtp.' + $domain + '.local' 

cd $path
try {
	node nightwatch.js -e chrome
} catch {
	
}
Send-MailMessage -From $email -To $to -Attachments .\reports\CHROME_49.0.2623.87_XP_checkout.test.xml -Subject 'Nightwatch.js Results' -Body 'See attachments.' -SmtpServer $smtp
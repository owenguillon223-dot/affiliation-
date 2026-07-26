/** Redirects ads.txt crawlers to the Ezoic-managed ads.txt for this domain. */
export async function GET() {
  return Response.redirect("https://srv.adstxtmanager.com/19390/clearer-days.com", 301);
}

import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/utils/header';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-10 max-w-3xl p-4">
        <Card>
          <CardContent className="space-y-4 py-6">
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
            <p>
              This project is self-hosted. The original developers do not
              collect, process, or store any user data. All data is stored
              locally on the server where this application is hosted.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                No analytics, tracking, or external data reporting is built into
                this tool.
              </li>
              <li>
                Any user data entered into the dashboard remains private to the
                self-hosting server.
              </li>
              <li>
                Organizations using this tool are responsible for securing and
                managing their own user data.
              </li>
            </ul>
            <p>
              If you are using a version of this tool hosted by your
              organization, please contact them for their specific privacy
              practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/utils/header';

export default function TermsPage() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-10 max-w-3xl p-4">
        <Card>
          <CardContent className="space-y-4 py-6">
            <h1 className="text-2xl font-bold">Terms of Service</h1>
            <p>
              This project is an open-source, self-hosted tool intended to help
              users manage their projects and tasks. By using this software, you
              agree to the following terms.
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                This software is provided "as is", without any warranty or
                guarantee.
              </li>
              <li>
                The original authors are not responsible for any data loss,
                security issues, or misuse.
              </li>
              <li>
                Each user or organization hosting this tool is responsible for
                complying with applicable laws and regulations.
              </li>
              <li>
                You may modify and use this tool according to the terms of its
                open-source license.
              </li>
            </ul>
            <p>
              For any custom terms related to your organization’s use of this
              tool, please consult your system administrator or legal team.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export const DEMO_USER_ID = 'local-learner';
export const DEMO_ORG_ID = 'scl-public-training';

export const demoProfile = {
  id: DEMO_USER_ID,
  first_name: 'Training',
  last_name: 'Learner',
  organization: 'Public Training',
  organization_id: DEMO_ORG_ID,
  job_role: 'Learner',
  created_at: '2026-01-01T00:00:00.000Z',
};

export const courses = [
  {
    id: 'ot-csir-core',
    title: 'SCL OT CSIR Training',
    description:
      'Self-directed micro-training for operational technology cyber security incident response roles, reporting, evidence handling, and communications.',
    duration_minutes: 15,
    version: '1.0.0',
    active: true,
    category: 'Security',
  },
];

export const modules = [
  {
    id: 'csir-01-purpose',
    course_id: 'ot-csir-core',
    sequence: 1,
    title: 'Purpose and Response Principles',
    type: 'lesson',
    estimated_minutes: 3,
    body_html: `
      <p>This training introduces the core expectations for operational technology cyber security incident response.</p>
      <p>The response process is designed to help teams recognize potential incidents, protect operational continuity, coordinate clearly, and document actions taken during the event.</p>
      <h2>Core principles</h2>
      <ul>
        <li>Protect people, safety, and reliable operations first.</li>
        <li>Escalate suspected cyber events quickly through approved channels.</li>
        <li>Preserve evidence and avoid unnecessary changes to affected systems.</li>
        <li>Use clear, factual communication during response and recovery.</li>
      </ul>
    `,
  },
  {
    id: 'csir-02-definitions',
    course_id: 'ot-csir-core',
    sequence: 2,
    title: 'Key Definitions and Severity',
    type: 'lesson',
    estimated_minutes: 3,
    body_html: `
      <p>A cyber security incident is an event that may compromise confidentiality, integrity, availability, or safe operation of OT systems.</p>
      <p>Severity is based on operational impact, scope, safety implications, and whether regulatory or leadership notifications may be required.</p>
      <h2>Common indicators</h2>
      <ul>
        <li>Unexpected loss of visibility or control.</li>
        <li>Unauthorized access, malware, or suspicious account activity.</li>
        <li>Changes to configurations, logic, or network behavior without an approved work order.</li>
        <li>Events affecting monitoring, communications, or recovery capability.</li>
      </ul>
    `,
  },
  {
    id: 'csir-03-workflow',
    course_id: 'ot-csir-core',
    sequence: 3,
    title: 'Response Workflow and Evidence Handling',
    type: 'lesson',
    estimated_minutes: 3,
    body_html: `
      <p>Incident response follows a structured flow: identify, triage, contain, eradicate, recover, and document lessons learned.</p>
      <p>Evidence handling focuses on preserving facts. Record who observed the event, when it happened, what systems were involved, and what actions were taken.</p>
      <h2>Evidence practices</h2>
      <ul>
        <li>Capture screenshots, timestamps, alerts, logs, and relevant system states.</li>
        <li>Do not delete or overwrite data unless directed by the response lead.</li>
        <li>Document each action in sequence so the response can be reconstructed later.</li>
      </ul>
    `,
  },
  {
    id: 'csir-04-communications',
    course_id: 'ot-csir-core',
    sequence: 4,
    title: 'Roles, Communications, and Reporting',
    type: 'lesson',
    estimated_minutes: 3,
    body_html: `
      <p>Effective response depends on defined roles and disciplined communication. The response lead coordinates technical, operational, leadership, and regulatory inputs.</p>
      <p>Communication should be timely, factual, and limited to information that has been verified or clearly labeled as preliminary.</p>
      <h2>During an incident</h2>
      <ul>
        <li>Report suspected events promptly.</li>
        <li>Keep updates concise and action-oriented.</li>
        <li>Avoid speculation, blame, or unapproved external communication.</li>
        <li>Escalate regulatory or public-impact concerns through approved leadership channels.</li>
      </ul>
    `,
  },
  {
    id: 'csir-05-exam',
    course_id: 'ot-csir-core',
    sequence: 5,
    title: 'Final Exam',
    type: 'exam',
    estimated_minutes: 3,
    body_html: `
      <p>Answer all questions. A score of 80% or higher is required to complete the course and generate a certificate.</p>
    `,
  },
] as const;

export const questions = [
  {
    id: 'q-01',
    module_id: 'csir-01-purpose',
    prompt: 'What is the first priority during an OT cyber security incident response?',
    choices: [
      { id: 'A', text: 'Protect people, safety, and reliable operations.' },
      { id: 'B', text: 'Immediately rebuild all affected systems.' },
      { id: 'C', text: 'Notify the public before internal triage.' },
      { id: 'D', text: 'Delete suspicious files to stop the event.' },
    ],
    correct_choice: 'A',
    rationale: 'OT response prioritizes safety and reliable operations before other response objectives.',
    sequence: 1,
  },
  {
    id: 'q-02',
    module_id: 'csir-02-definitions',
    prompt: 'Which factor can influence incident severity?',
    choices: [
      { id: 'A', text: 'The color of the alert banner.' },
      { id: 'B', text: 'Operational impact and scope.' },
      { id: 'C', text: 'Whether the event happened on a weekday.' },
      { id: 'D', text: 'The age of the workstation only.' },
    ],
    correct_choice: 'B',
    rationale: 'Severity is based on impact, scope, safety implications, and reporting requirements.',
    sequence: 1,
  },
  {
    id: 'q-03',
    module_id: 'csir-03-workflow',
    prompt: 'What should responders do to preserve evidence?',
    choices: [
      { id: 'A', text: 'Record timestamps, alerts, screenshots, and actions taken.' },
      { id: 'B', text: 'Clear logs to reduce confusion.' },
      { id: 'C', text: 'Reimage systems before documenting symptoms.' },
      { id: 'D', text: 'Share unverified details broadly.' },
    ],
    correct_choice: 'A',
    rationale: 'Useful evidence includes timestamps, observed behavior, logs, screenshots, and response actions.',
    sequence: 1,
  },
  {
    id: 'q-04',
    module_id: 'csir-04-communications',
    prompt: 'How should incident communications be handled?',
    choices: [
      { id: 'A', text: 'Use factual, approved, and concise updates.' },
      { id: 'B', text: 'Speculate freely so everyone has theories.' },
      { id: 'C', text: 'Avoid all communication until recovery is complete.' },
      { id: 'D', text: 'Post technical details publicly.' },
    ],
    correct_choice: 'A',
    rationale: 'Incident updates should be accurate, coordinated, and appropriate for the audience.',
    sequence: 1,
  },
  {
    id: 'exam-01',
    module_id: 'csir-05-exam',
    prompt: 'A suspected unauthorized configuration change is discovered on an OT system. What is the best first response?',
    choices: [
      { id: 'A', text: 'Report and document the observation through approved channels.' },
      { id: 'B', text: 'Ignore it unless service is already down.' },
      { id: 'C', text: 'Delete all related logs.' },
      { id: 'D', text: 'Announce it externally.' },
    ],
    correct_choice: 'A',
    rationale: 'Suspected incidents should be escalated and documented quickly.',
    sequence: 1,
  },
  {
    id: 'exam-02',
    module_id: 'csir-05-exam',
    prompt: 'What information is most useful in an incident timeline?',
    choices: [
      { id: 'A', text: 'Observed facts, timestamps, affected systems, and actions taken.' },
      { id: 'B', text: 'Only the final root cause.' },
      { id: 'C', text: 'Guesses about who caused the event.' },
      { id: 'D', text: 'Unrelated maintenance history.' },
    ],
    correct_choice: 'A',
    rationale: 'A factual timeline helps response teams understand and reconstruct the event.',
    sequence: 2,
  },
  {
    id: 'exam-03',
    module_id: 'csir-05-exam',
    prompt: 'What score is required to pass the final exam?',
    choices: [
      { id: 'A', text: '50%' },
      { id: 'B', text: '60%' },
      { id: 'C', text: '80%' },
      { id: 'D', text: '100%' },
    ],
    correct_choice: 'C',
    rationale: 'The final exam pass threshold is 80%.',
    sequence: 3,
  },
  {
    id: 'exam-04',
    module_id: 'csir-05-exam',
    prompt: 'Which communication style is preferred during response?',
    choices: [
      { id: 'A', text: 'Factual and coordinated.' },
      { id: 'B', text: 'Speculative and informal.' },
      { id: 'C', text: 'Delayed until all details are perfect.' },
      { id: 'D', text: 'Unapproved external updates.' },
    ],
    correct_choice: 'A',
    rationale: 'Coordinated factual communication supports effective response.',
    sequence: 4,
  },
  {
    id: 'exam-05',
    module_id: 'csir-05-exam',
    prompt: 'What should be avoided when preserving evidence?',
    choices: [
      { id: 'A', text: 'Capturing screenshots.' },
      { id: 'B', text: 'Recording timestamps.' },
      { id: 'C', text: 'Unnecessary deletion or overwriting of data.' },
      { id: 'D', text: 'Documenting actions taken.' },
    ],
    correct_choice: 'C',
    rationale: 'Deleting or overwriting data can damage evidence and weaken later review.',
    sequence: 5,
  },
];

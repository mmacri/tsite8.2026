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
      'Complete public training course for operational technology cyber security incident response roles, severity assessment, evidence handling, reporting, and documentation.',
    duration_minutes: 35,
    version: '1.1.0',
    active: true,
    category: 'Security',
  },
];

export const modules = [
  {
    id: 'csir-01-overview-purpose',
    course_id: 'ot-csir-core',
    sequence: 1,
    title: 'Overview and Purpose',
    type: 'lesson',
    estimated_minutes: 5,
    body_html: `
      <p>This course prepares operational technology personnel to recognize, report, and support response to cyber security incidents that may affect utility operations.</p>
      <p>The goal is not to turn every learner into an incident commander. The goal is to make sure every learner understands what to do first, what to preserve, who should coordinate the response, and how to communicate facts during a time-sensitive event.</p>
      <h2>Why OT incident response is different</h2>
      <p>Operational technology environments control or monitor physical processes. A response action that is routine in an enterprise IT environment may create safety, reliability, or availability risk in OT. For that reason, cyber response must be coordinated with operations, engineering, control room, security, and leadership functions.</p>
      <h2>Training outcomes</h2>
      <ul>
        <li>Recognize common indicators of OT cyber security incidents.</li>
        <li>Understand the response phases used to triage, contain, recover, and document an incident.</li>
        <li>Apply severity thinking without over-classifying or under-reporting an event.</li>
        <li>Preserve useful evidence while avoiding unnecessary changes to affected systems.</li>
        <li>Use clear communication and approved reporting channels.</li>
      </ul>
      <h2>Guiding principles</h2>
      <ul>
        <li>Protect people, public safety, and reliable operations first.</li>
        <li>Report suspected cyber events promptly, even when the facts are incomplete.</li>
        <li>Document what is known, what is unknown, and what actions have already been taken.</li>
        <li>Coordinate technical actions with the response lead and operational owners.</li>
        <li>Avoid sharing sensitive operational details outside approved channels.</li>
      </ul>
    `,
  },
  {
    id: 'csir-02-key-definitions',
    course_id: 'ot-csir-core',
    sequence: 2,
    title: 'Key Definitions',
    type: 'lesson',
    estimated_minutes: 5,
    body_html: `
      <p>A shared vocabulary helps responders avoid confusion. During an incident, teams need consistent language for events, alerts, impacts, assets, and response actions.</p>
      <h2>Event</h2>
      <p>An event is an observable condition or activity. Examples include an alert, login, configuration change, blocked connection, outage, or operator report. Not every event is an incident.</p>
      <h2>Cyber security incident</h2>
      <p>A cyber security incident is an event or set of events that may compromise the confidentiality, integrity, availability, reliability, or safe operation of systems, data, networks, applications, or operational processes.</p>
      <h2>Operational impact</h2>
      <p>Operational impact means the event affects or could affect the ability to monitor, control, dispatch, restore, or safely operate critical systems. Loss of visibility, loss of control, unexpected behavior, or degraded communications can all be operationally significant.</p>
      <h2>Containment</h2>
      <p>Containment is the coordinated action taken to limit further impact. In OT, containment may include network isolation, account restriction, blocking traffic, manual workarounds, or preserving a stable operating state. Containment should be approved and coordinated so it does not create additional operational risk.</p>
      <h2>Evidence</h2>
      <p>Evidence is information that helps explain what happened. Evidence can include logs, screenshots, timestamps, alerts, configuration records, account activity, operator notes, network flows, system images, or change records.</p>
      <h2>Recovery</h2>
      <p>Recovery is the controlled process of restoring normal operation, validating that systems are trustworthy, and confirming that response actions did not leave unresolved risk.</p>
    `,
  },
  {
    id: 'csir-03-severity-reportability',
    course_id: 'ot-csir-core',
    sequence: 3,
    title: 'Severity and Reportability',
    type: 'lesson',
    estimated_minutes: 6,
    body_html: `
      <p>Severity is a practical way to prioritize response. It considers actual impact, likely impact, scope, safety implications, restoration complexity, and whether leadership or regulatory reporting may be required.</p>
      <h2>Severity factors</h2>
      <ul>
        <li><strong>Safety:</strong> Could the event affect worker safety, public safety, or physical equipment?</li>
        <li><strong>Operations:</strong> Does the event affect monitoring, control, dispatch, restoration, or field operations?</li>
        <li><strong>Scope:</strong> Is the event limited to one device or account, or does it affect multiple sites, networks, systems, or users?</li>
        <li><strong>Integrity:</strong> Could data, logic, settings, alarms, or measurements have been changed?</li>
        <li><strong>Availability:</strong> Are systems unavailable, degraded, unstable, or at risk of becoming unavailable?</li>
        <li><strong>Reporting:</strong> Could the event require internal executive notification, legal review, public communications, or external reporting?</li>
      </ul>
      <h2>Initial severity is provisional</h2>
      <p>Early severity assignments are based on the best available facts. They should be updated as more information becomes available. A low-severity event can escalate if new evidence shows broader access, persistence, operational impact, or attempted manipulation.</p>
      <h2>Reportability</h2>
      <p>Reportability is the question of whether an event must be reported through specific internal or external channels. Learners do not need to make legal or regulatory determinations alone. The important action is to escalate potential reportability concerns promptly so the appropriate teams can evaluate them.</p>
      <h2>When in doubt</h2>
      <p>If an event may affect OT operations, safety, reliability, regulated systems, or incident reporting obligations, treat it as important and escalate. Delayed escalation can reduce evidence quality and narrow response options.</p>
    `,
  },
  {
    id: 'csir-04-workflow-evidence',
    course_id: 'ot-csir-core',
    sequence: 4,
    title: 'CSIR Workflow and Evidence Handling',
    type: 'lesson',
    estimated_minutes: 6,
    body_html: `
      <p>The cyber security incident response workflow provides structure during uncertain conditions. It helps teams move from observation to triage, containment, eradication, recovery, and lessons learned.</p>
      <h2>1. Identify</h2>
      <p>Identify the event, affected systems, reporter, time observed, and initial symptoms. Capture the facts without assuming root cause.</p>
      <h2>2. Triage</h2>
      <p>Determine likely severity, operational impact, scope, and whether immediate containment is needed. Confirm whether the event is isolated or part of a larger pattern.</p>
      <h2>3. Contain</h2>
      <p>Limit additional impact using coordinated actions. In OT, containment must be planned with operational owners because disconnecting or changing a system can affect monitoring, control, or recovery.</p>
      <h2>4. Eradicate</h2>
      <p>Remove the cause of compromise when it is understood. This may include disabling accounts, removing malware, closing access paths, correcting unauthorized changes, or replacing compromised components.</p>
      <h2>5. Recover</h2>
      <p>Restore service in a controlled way. Validate system behavior, configuration, logs, access, communications, and operational readiness before considering the event resolved.</p>
      <h2>6. Document and improve</h2>
      <p>Complete the incident record, timeline, evidence inventory, decisions, approvals, and lessons learned. Follow-up actions may include control improvements, training, monitoring changes, or procedure updates.</p>
      <h2>Evidence handling expectations</h2>
      <ul>
        <li>Record timestamps with time zone when possible.</li>
        <li>Preserve screenshots, alerts, logs, configuration exports, and operator observations.</li>
        <li>Document who took each action and why it was taken.</li>
        <li>Do not delete logs, wipe systems, or overwrite data unless directed by the response lead.</li>
        <li>Keep sensitive evidence in approved locations with appropriate access controls.</li>
      </ul>
    `,
  },
  {
    id: 'csir-05-roles-communications',
    course_id: 'ot-csir-core',
    sequence: 5,
    title: 'Roles and Communications',
    type: 'lesson',
    estimated_minutes: 5,
    body_html: `
      <p>Incident response depends on clear roles. Each participant should understand their responsibility, escalation path, and communication limits.</p>
      <h2>Common response roles</h2>
      <ul>
        <li><strong>Reporter:</strong> Identifies and reports suspicious activity or operational symptoms.</li>
        <li><strong>Response lead:</strong> Coordinates triage, priorities, status, decisions, and next actions.</li>
        <li><strong>Operations representative:</strong> Advises on operational risk, safety, workarounds, and restoration priorities.</li>
        <li><strong>Cyber security analyst:</strong> Reviews alerts, logs, indicators, access, and potential compromise paths.</li>
        <li><strong>System owner or engineer:</strong> Provides system context, validates expected behavior, and supports recovery.</li>
        <li><strong>Leadership and communications:</strong> Coordinate executive updates, legal considerations, public messaging, or external notifications when needed.</li>
      </ul>
      <h2>Communication rules</h2>
      <ul>
        <li>Use approved channels for incident information.</li>
        <li>Separate confirmed facts from assumptions and open questions.</li>
        <li>Keep status updates concise: impact, scope, actions taken, decisions needed, and next update time.</li>
        <li>Avoid speculation, blame, or unapproved public statements.</li>
        <li>Escalate quickly if the event may affect safety, reliability, regulated operations, or public trust.</li>
      </ul>
      <h2>Good incident update format</h2>
      <p>A useful update states: what happened, when it was observed, what is affected, what is being done, what help is needed, and when the next update will be provided.</p>
    `,
  },
  {
    id: 'csir-06-reporting-documentation',
    course_id: 'ot-csir-core',
    sequence: 6,
    title: 'Regulatory Reporting and Documentation',
    type: 'lesson',
    estimated_minutes: 5,
    body_html: `
      <p>Some incidents may require formal reporting or review. Learners are not expected to make final regulatory determinations on their own, but they are expected to preserve information and escalate potential reporting concerns.</p>
      <h2>Documentation goals</h2>
      <ul>
        <li>Create a reliable timeline of observations, decisions, approvals, and actions.</li>
        <li>Capture enough detail for later review without exposing unnecessary sensitive information.</li>
        <li>Support operational recovery, legal review, regulatory review, and lessons learned.</li>
        <li>Make it clear what was known at each point in time.</li>
      </ul>
      <h2>What to document</h2>
      <ul>
        <li>Initial reporter, date, time, location, and method of report.</li>
        <li>Systems, networks, applications, accounts, or operational processes involved.</li>
        <li>Observed symptoms, alerts, errors, anomalous behavior, or service impact.</li>
        <li>Containment and recovery actions, including approvals and operational considerations.</li>
        <li>Evidence collected and where it is stored.</li>
        <li>Open questions, assumptions, and follow-up actions.</li>
      </ul>
      <h2>Sensitive information</h2>
      <p>Do not include unnecessary internal contact lists, confidential procedures, credentials, detailed network maps, or exploit details in broad communications. Use approved repositories and access controls for sensitive documentation.</p>
      <h2>Closure</h2>
      <p>An incident should not be considered closed just because service is restored. Closure should include validation, documentation, required notifications, lessons learned, and ownership for remaining corrective actions.</p>
    `,
  },
  {
    id: 'csir-07-field-scenario',
    course_id: 'ot-csir-core',
    sequence: 7,
    title: 'Applied Scenario Review',
    type: 'lesson',
    estimated_minutes: 4,
    body_html: `
      <p>Use the following scenario to apply the course concepts before the final exam.</p>
      <h2>Scenario</h2>
      <p>A control room operator reports unexpected alarms from a field device after a routine maintenance window. At nearly the same time, an analyst sees failed remote access attempts followed by a successful login from an unusual source. A field technician notes that a device configuration appears different from the approved change record.</p>
      <h2>Recommended learner response</h2>
      <ul>
        <li>Treat the situation as a suspected cyber security incident with possible operational impact.</li>
        <li>Report the facts through approved channels and identify the systems involved.</li>
        <li>Preserve evidence: alarm history, login records, screenshots, timestamps, change records, and technician observations.</li>
        <li>Do not make unnecessary configuration changes until coordinated with the response lead and operational owner.</li>
        <li>Support triage by separating confirmed facts from assumptions.</li>
      </ul>
      <h2>What good looks like</h2>
      <p>A strong response is fast, factual, coordinated, and careful. It protects operations while preserving the information needed to understand and resolve the event.</p>
    `,
  },
  {
    id: 'csir-08-final-exam',
    course_id: 'ot-csir-core',
    sequence: 8,
    title: 'Final Exam',
    type: 'exam',
    estimated_minutes: 5,
    body_html: `
      <p>Answer all questions. A score of 80% or higher is required to complete the course and generate a certificate.</p>
      <p>You may retry the exam if you do not pass. Review the modules before retrying.</p>
    `,
  },
] as const;

export const questions = [
  {
    id: 'q-01-01',
    module_id: 'csir-01-overview-purpose',
    prompt: 'What is the primary purpose of this OT CSIR training?',
    choices: [
      { id: 'A', text: 'To teach learners how to recognize, report, and support OT cyber incident response.' },
      { id: 'B', text: 'To replace the need for a coordinated response lead.' },
      { id: 'C', text: 'To encourage every learner to make public statements during incidents.' },
      { id: 'D', text: 'To focus only on enterprise email security.' },
    ],
    correct_choice: 'A',
    rationale: 'The course prepares learners to recognize, report, preserve evidence, and coordinate support for OT cyber incidents.',
    sequence: 1,
  },
  {
    id: 'q-01-02',
    module_id: 'csir-01-overview-purpose',
    prompt: 'Which priority comes first during OT incident response?',
    choices: [
      { id: 'A', text: 'Public posting of all technical details.' },
      { id: 'B', text: 'Protecting people, public safety, and reliable operations.' },
      { id: 'C', text: 'Rebuilding systems before collecting evidence.' },
      { id: 'D', text: 'Assigning blame.' },
    ],
    correct_choice: 'B',
    rationale: 'OT response starts with safety and reliable operations because these environments affect physical processes.',
    sequence: 2,
  },
  {
    id: 'q-02-01',
    module_id: 'csir-02-key-definitions',
    prompt: 'Which statement best describes a cyber security incident?',
    choices: [
      { id: 'A', text: 'Any routine login during business hours.' },
      { id: 'B', text: 'An event that may compromise confidentiality, integrity, availability, reliability, or safe operation.' },
      { id: 'C', text: 'Only an event that has already caused a complete outage.' },
      { id: 'D', text: 'Only malware on a desktop computer.' },
    ],
    correct_choice: 'B',
    rationale: 'A cyber security incident may affect systems, data, networks, applications, or operational processes.',
    sequence: 1,
  },
  {
    id: 'q-02-02',
    module_id: 'csir-02-key-definitions',
    prompt: 'What is containment?',
    choices: [
      { id: 'A', text: 'Coordinated action to limit additional impact.' },
      { id: 'B', text: 'Deleting all event logs.' },
      { id: 'C', text: 'Waiting until root cause is fully known before taking any action.' },
      { id: 'D', text: 'Publishing a complete network diagram.' },
    ],
    correct_choice: 'A',
    rationale: 'Containment limits additional impact while accounting for OT safety and reliability needs.',
    sequence: 2,
  },
  {
    id: 'q-03-01',
    module_id: 'csir-03-severity-reportability',
    prompt: 'Which factor should be considered when assessing severity?',
    choices: [
      { id: 'A', text: 'Operational impact and scope.' },
      { id: 'B', text: 'Whether the alert color is red.' },
      { id: 'C', text: 'Whether the event is inconvenient to document.' },
      { id: 'D', text: 'The number of people in the meeting.' },
    ],
    correct_choice: 'A',
    rationale: 'Severity considers safety, operations, scope, integrity, availability, and reporting implications.',
    sequence: 1,
  },
  {
    id: 'q-03-02',
    module_id: 'csir-03-severity-reportability',
    prompt: 'What should a learner do if an event may require formal reporting?',
    choices: [
      { id: 'A', text: 'Ignore it until the final root cause report is written.' },
      { id: 'B', text: 'Escalate the concern promptly through approved channels.' },
      { id: 'C', text: 'Make the final legal determination alone.' },
      { id: 'D', text: 'Avoid documenting the event.' },
    ],
    correct_choice: 'B',
    rationale: 'Learners should escalate potential reporting concerns so the appropriate teams can evaluate them.',
    sequence: 2,
  },
  {
    id: 'q-04-01',
    module_id: 'csir-04-workflow-evidence',
    prompt: 'Which response phase focuses on determining likely impact, scope, and immediate needs?',
    choices: [
      { id: 'A', text: 'Triage.' },
      { id: 'B', text: 'Celebration.' },
      { id: 'C', text: 'Deletion.' },
      { id: 'D', text: 'Speculation.' },
    ],
    correct_choice: 'A',
    rationale: 'Triage determines likely severity, operational impact, scope, and response priorities.',
    sequence: 1,
  },
  {
    id: 'q-04-02',
    module_id: 'csir-04-workflow-evidence',
    prompt: 'Which action best preserves evidence?',
    choices: [
      { id: 'A', text: 'Record timestamps, screenshots, alerts, logs, and actions taken.' },
      { id: 'B', text: 'Wipe systems immediately before documenting symptoms.' },
      { id: 'C', text: 'Clear all logs to reduce confusion.' },
      { id: 'D', text: 'Store evidence in an unapproved public folder.' },
    ],
    correct_choice: 'A',
    rationale: 'Evidence should preserve observed facts and response actions in approved locations.',
    sequence: 2,
  },
  {
    id: 'q-05-01',
    module_id: 'csir-05-roles-communications',
    prompt: 'What is the response lead responsible for?',
    choices: [
      { id: 'A', text: 'Coordinating triage, priorities, decisions, status, and next actions.' },
      { id: 'B', text: 'Preventing all communication.' },
      { id: 'C', text: 'Making unapproved public statements.' },
      { id: 'D', text: 'Deleting evidence after recovery.' },
    ],
    correct_choice: 'A',
    rationale: 'The response lead coordinates response priorities, decisions, status, and follow-up actions.',
    sequence: 1,
  },
  {
    id: 'q-05-02',
    module_id: 'csir-05-roles-communications',
    prompt: 'What makes an incident update useful?',
    choices: [
      { id: 'A', text: 'It separates confirmed facts from assumptions and states actions and needs.' },
      { id: 'B', text: 'It includes rumors and blame.' },
      { id: 'C', text: 'It avoids mentioning impact or next steps.' },
      { id: 'D', text: 'It is sent only after all recovery work is complete.' },
    ],
    correct_choice: 'A',
    rationale: 'Useful updates are concise, factual, coordinated, and clear about impact, actions, needs, and timing.',
    sequence: 2,
  },
  {
    id: 'q-06-01',
    module_id: 'csir-06-reporting-documentation',
    prompt: 'Which item belongs in an incident record?',
    choices: [
      { id: 'A', text: 'Initial reporter, time, systems involved, symptoms, actions, and evidence location.' },
      { id: 'B', text: 'Credentials for affected systems.' },
      { id: 'C', text: 'Unapproved internal contact lists for broad distribution.' },
      { id: 'D', text: 'Only the final conclusion.' },
    ],
    correct_choice: 'A',
    rationale: 'Incident records should support timeline reconstruction, review, recovery, and lessons learned.',
    sequence: 1,
  },
  {
    id: 'q-06-02',
    module_id: 'csir-06-reporting-documentation',
    prompt: 'When should an incident be considered ready for closure?',
    choices: [
      { id: 'A', text: 'As soon as the first alert stops.' },
      { id: 'B', text: 'After validation, documentation, required notifications, lessons learned, and assigned follow-up actions.' },
      { id: 'C', text: 'Before evidence is reviewed.' },
      { id: 'D', text: 'After deleting temporary notes.' },
    ],
    correct_choice: 'B',
    rationale: 'Closure requires more than service restoration; it also requires validation, documentation, and follow-up ownership.',
    sequence: 2,
  },
  {
    id: 'q-07-01',
    module_id: 'csir-07-field-scenario',
    prompt: 'In the scenario, why should the event be escalated?',
    choices: [
      { id: 'A', text: 'It includes unusual access, possible unauthorized configuration change, and operational symptoms.' },
      { id: 'B', text: 'It is only a paperwork issue.' },
      { id: 'C', text: 'Escalation is never needed for field device issues.' },
      { id: 'D', text: 'Only public communications teams can report alarms.' },
    ],
    correct_choice: 'A',
    rationale: 'The scenario combines cyber indicators and potential operational impact, which warrants prompt escalation.',
    sequence: 1,
  },
  {
    id: 'q-07-02',
    module_id: 'csir-07-field-scenario',
    prompt: 'What is the best immediate action in the scenario?',
    choices: [
      { id: 'A', text: 'Report facts, preserve evidence, and coordinate before making unnecessary changes.' },
      { id: 'B', text: 'Reset the device and clear logs immediately.' },
      { id: 'C', text: 'Wait until the next maintenance window without reporting.' },
      { id: 'D', text: 'Post details in an unapproved channel.' },
    ],
    correct_choice: 'A',
    rationale: 'A strong response is fast, factual, coordinated, and careful with evidence.',
    sequence: 2,
  },
  {
    id: 'exam-01',
    module_id: 'csir-08-final-exam',
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
    module_id: 'csir-08-final-exam',
    prompt: 'Which severity factor is most relevant to OT response?',
    choices: [
      { id: 'A', text: 'Safety and operational reliability impact.' },
      { id: 'B', text: 'The length of the email subject line.' },
      { id: 'C', text: 'The brand of the workstation.' },
      { id: 'D', text: 'Whether a meeting is already scheduled.' },
    ],
    correct_choice: 'A',
    rationale: 'OT severity must account for safety, reliability, availability, scope, and integrity.',
    sequence: 2,
  },
  {
    id: 'exam-03',
    module_id: 'csir-08-final-exam',
    prompt: 'What information is most useful in an incident timeline?',
    choices: [
      { id: 'A', text: 'Observed facts, timestamps, affected systems, decisions, and actions taken.' },
      { id: 'B', text: 'Only the final root cause.' },
      { id: 'C', text: 'Guesses about who caused the event.' },
      { id: 'D', text: 'Unrelated maintenance history.' },
    ],
    correct_choice: 'A',
    rationale: 'A factual timeline helps response teams understand and reconstruct the event.',
    sequence: 3,
  },
  {
    id: 'exam-04',
    module_id: 'csir-08-final-exam',
    prompt: 'Which communication style is preferred during response?',
    choices: [
      { id: 'A', text: 'Factual, concise, coordinated, and approved.' },
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
    module_id: 'csir-08-final-exam',
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
  {
    id: 'exam-06',
    module_id: 'csir-08-final-exam',
    prompt: 'Why must containment actions be coordinated in OT environments?',
    choices: [
      { id: 'A', text: 'Because changes can affect monitoring, control, safety, or recovery.' },
      { id: 'B', text: 'Because coordination slows down every response.' },
      { id: 'C', text: 'Because evidence is not important in OT.' },
      { id: 'D', text: 'Because only public relations can approve technical actions.' },
    ],
    correct_choice: 'A',
    rationale: 'OT containment must avoid creating additional operational or safety risk.',
    sequence: 6,
  },
  {
    id: 'exam-07',
    module_id: 'csir-08-final-exam',
    prompt: 'Who should make final decisions about potential regulatory reporting?',
    choices: [
      { id: 'A', text: 'The appropriate authorized teams after prompt escalation and review.' },
      { id: 'B', text: 'Any learner acting alone.' },
      { id: 'C', text: 'No one, because reporting concerns should not be documented.' },
      { id: 'D', text: 'Only the person who first saw the alert.' },
    ],
    correct_choice: 'A',
    rationale: 'Learners escalate concerns; authorized teams evaluate reporting obligations.',
    sequence: 7,
  },
  {
    id: 'exam-08',
    module_id: 'csir-08-final-exam',
    prompt: 'Which statement best describes closure?',
    choices: [
      { id: 'A', text: 'Closure includes validation, documentation, lessons learned, and follow-up ownership.' },
      { id: 'B', text: 'Closure happens when the first alert disappears.' },
      { id: 'C', text: 'Closure means deleting notes and evidence.' },
      { id: 'D', text: 'Closure does not require review.' },
    ],
    correct_choice: 'A',
    rationale: 'Closure is complete only after response, validation, documentation, and follow-up are addressed.',
    sequence: 8,
  },
  {
    id: 'exam-09',
    module_id: 'csir-08-final-exam',
    prompt: 'What score is required to pass the final exam?',
    choices: [
      { id: 'A', text: '50%' },
      { id: 'B', text: '60%' },
      { id: 'C', text: '80%' },
      { id: 'D', text: '100%' },
    ],
    correct_choice: 'C',
    rationale: 'The final exam pass threshold is 80%.',
    sequence: 9,
  },
  {
    id: 'exam-10',
    module_id: 'csir-08-final-exam',
    prompt: 'In the applied scenario, what combination makes the event suspicious?',
    choices: [
      { id: 'A', text: 'Unexpected alarms, unusual access activity, and a configuration mismatch.' },
      { id: 'B', text: 'A routine lunch break.' },
      { id: 'C', text: 'An approved change with no anomalies.' },
      { id: 'D', text: 'A scheduled training reminder.' },
    ],
    correct_choice: 'A',
    rationale: 'Multiple indicators together increase concern and should trigger coordinated triage.',
    sequence: 10,
  },
];

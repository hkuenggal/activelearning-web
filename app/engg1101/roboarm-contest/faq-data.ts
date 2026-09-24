export type ContestFaqItem = {
  item: string;
  section:
    | "Game Field"
    | "Game Procedure"
    | "Scoring"
    | "Attack"
    | "Retries"
    | "Violations & Disqualifications"
    | "Robots & Safety"
    | "Others";
  rule: string;
  question: string;
  reply: string;
  updated: string;
};

const updated = "24 Sep 2026";

export const contestFaq: ContestFaqItem[] = [
  {
    item: "1 a",
    section: "Game Field",
    rule: "3.1.3-3.1.5",
    question: "Where must the Robot be placed when the Game starts?",
    reply:
      "The Robot shall be placed entirely within its designated Robot Area during the Preparation Period and at the Start Signal. All parts of the Robot, including the end-effector, attachments, sensors, and cables, shall remain within the Robot Area and its vertical projection.",
    updated,
  },
  {
    item: "1 b",
    section: "Game Field",
    rule: "3.1.6",
    question: "How may a team arrange its Blocks before the Game starts?",
    reply:
      "A team may place its allocated Blocks in any position or orientation within its Block Supply Area, provided every Block remains entirely within that area, no Block is placed on or held by the Robot, and the arrangement does not obstruct the opposing team or competition officials.",
    updated,
  },
  {
    item: "2 a",
    section: "Game Procedure",
    rule: "3.2.1-3.2.2",
    question: "When may the Robot begin moving?",
    reply:
      "The Robot may be powered before the Start Signal, but it shall not perform any game-affecting motion until the Head Referee gives the official Start Signal and the three-minute Game Period begins.",
    updated,
  },
  {
    item: "2 b",
    section: "Game Procedure",
    rule: "3.3.1.1-3.3.1.3",
    question: "May both Robots operate at the same time, and who may control the Robot?",
    reply:
      "Yes. Both Robots may operate simultaneously throughout the Game Period. Only the registered Operator may control the Robot, and the Operator shall remain within the designated Operator Station unless instructed otherwise by a referee.",
    updated,
  },
  {
    item: "3 a",
    section: "Scoring",
    rule: "3.5.2 and 3.6",
    question: "How is a Great Victory achieved?",
    reply:
      "A Great Victory is achieved when a team has three legally placed and stable Blocks forming one connected horizontal, vertical, or diagonal line on the Tic-Tac-Toe Rack. The three Blocks may be of different sizes, shapes, or point values, but all must belong to the same team and occupy three consecutive positions. Once confirmed by the Head Referee, the Game ends immediately and that team wins, even if its numerical score is lower.",
    updated,
  },
  {
    item: "3 b",
    section: "Scoring",
    rule: "3.5.1.4-3.5.1.5",
    question: "What happens to the score if a placed Block moves or falls from the Rack?",
    reply:
      "If the Block remains legally positioned on the Tic-Tac-Toe Rack, it continues to score. If it falls out or otherwise ceases to satisfy the requirements of a legally placed Block, its previously awarded points are removed, regardless of how it was displaced.",
    updated,
  },
  {
    item: "4 a",
    section: "Attack",
    rule: "3.3.3-3.3.4",
    question: "When may a team perform an Attack Attempt, and when is the Attack Token consumed?",
    reply:
      "Each Successful Placement earns one Attack Token, up to three per Game. To attack, the Operator shall call \"Attack\" while the Robot is completely outside the Tic-Tac-Toe Zone and wait for referee authorization. The Token is consumed when the Attack Attempt begins, even if the attempt is unsuccessful.",
    updated,
  },
  {
    item: "4 b",
    section: "Attack",
    rule: "3.3.4.7-3.3.4.12",
    question: "What may the Robot do during one Attack Attempt?",
    reply:
      "One Attack Token permits one entry into the Tic-Tac-Toe Zone for one Attack Attempt against one eligible Opponent Block. The Robot shall leave the Zone completely before requesting another Attack. Entry for a legal Placement is separate and does not count as an Attack, provided the Robot does not intentionally contact an Opponent Block.",
    updated,
  },
  {
    item: "5 a",
    section: "Retries",
    rule: "3.4.2-3.4.5",
    question: "Does the Game timer stop during a Robot Retry?",
    reply:
      "No. There is no limit on the number of Robot Retries, but the Game timer continues to run. The Operator shall call \"Retry\" and wait for referee approval before anyone enters the Game Field or touches the Robot.",
    updated,
  },
  {
    item: "5 b",
    section: "Retries",
    rule: "3.4.6-3.4.9",
    question: "What may a team do during an authorized Robot Retry?",
    reply:
      "Authorized team members may reposition or restart the Robot, reconnect its controller or communication wire, return a Block held by the Robot to the Block Supply Area, and rearrange Blocks in that area. They shall not move Blocks already on the Rack, recalibrate using the Rack, or interfere with the opponent. The Robot may resume only after the Operator calls \"Start\" and receives referee approval.",
    updated,
  },
  {
    item: "6 a",
    section: "Violations & Disqualifications",
    rule: "Section 4",
    question: "What happens when a team receives a Violation?",
    reply:
      "A Violation results in a mandatory Robot Retry under Section 3.4. The Head Referee may impose additional penalties where the Rulebook allows, particularly when an action creates a significant advantage, presents a safety risk, or is repeated.",
    updated,
  },
  {
    item: "7 a",
    section: "Robots & Safety",
    rule: "6.2-6.3",
    question: "Which Robot modifications are permitted?",
    reply:
      "Teams may develop approved software, control algorithms, motion planning, calibration, computer vision, artificial intelligence, sensor fusion, interfaces, detection systems, and additional mechanisms based on the provided robotic arm design. Modified grippers, end-effectors, sensors, and attachments shall be securely mounted and pass Robot Inspection. Standardized components listed in Section 6.3 shall not be changed without express approval.",
    updated,
  },
  {
    item: "7 b",
    section: "Robots & Safety",
    rule: "6.4",
    question: "What starting and safety requirements apply to the Robot?",
    reply:
      "At the beginning of the Game, the Robot and all attachments shall fit entirely within the Robot Area and its vertical projection. The team shall use an approved power source and operate the Robot safely.",
    updated,
  },
  {
    item: "8 a",
    section: "Others",
    rule: "7.1.1",
    question: "What happens if a situation is not covered by the Rulebook or supporting materials conflict with it?",
    reply:
      "For matters not covered by the Rulebook, teams shall follow the decisions of the organizers and referees. If a demonstration video, briefing, or other supporting material conflicts with the Rulebook, the Rulebook and the Head Referee's instructions take precedence.",
    updated,
  },
];

export const questionFormEmbedUrl =
  process.env.NEXT_PUBLIC_ROBOARM_QUESTION_FORM_URL?.trim() ?? "";

export const publishedQuestionSheetUrl =
  process.env.NEXT_PUBLIC_ROBOARM_QUESTION_SHEET_URL?.trim() ?? "";

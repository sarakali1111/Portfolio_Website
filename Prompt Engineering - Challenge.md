# Challenge # 1
🎯 CHALLENGE 1 Technique: Zero-shot Definition: Instruction plus task input. No examples. The task input is required and never counts as an example. Task: Write a zero-shot prompt that asks an AI to classify security logs for suspicious activity (e.g., failed login attempts, unusual data access). Tip: Include a clear instruction and provide the log entry as input, but do not add any examples.

**Hint:** Structure your prompt with: 1. A direct instruction (e.g., *"Classify the following log entry as suspicious or benign"*). 2. The **log entry itself** as the task input (no prior examples). 3. Ensure the log entry is formatted clearly (e.g., as a JSON snippet or plain text block).

My Prompt:
Classify the following log entry and decide whether or not is suspicious: 2026-03-12 13:00:00 Failed login attempt from China.

📝 CHALLENGE 1 RESULT Technique check: This prompt includes an instruction and a task input (log entry) but also contains an example of classification ("decide whether or not is suspicious"), which violates the zero-shot rule—examples are not allowed. ✅ 4/10 — Good Feedback: The structure is clear, but the phrase "decide whether or not is suspicious" implies a prior example of classification. Remove this phrasing entirely and focus strictly on the instruction and log entry. For example: *"Classify this log entry as suspicious or benign: [log entry]."* 📊 Score: 4/40
## Attempt # 2
Since I got a low qualification I will try again, but the challenge is a bit different.
🎯 CHALLENGE 1 Technique: Zero-shot Definition: Instruction plus task input. No examples. The task input is required and never counts as an example. Task: Write a zero-shot prompt that asks an AI to classify a log entry as either "authentication_success" or "authentication_failure" based on its content. Tip: Include a clear instruction and the log entry as input, but do not provide any prior examples.

My Prompt for challenge 1 - Corrected.
Classify the following log entry: 2021-12-03 13:00:00 5 Failed Login Attempts - Account Blocked.

I got  a lower score!! 

📝 CHALLENGE 1 RESULT Technique check: The submission does not include an explicit instruction or structure—it only presents a log entry without framing it as a classification task. No zero-shot prompt was provided. ✅ 2/10 — Good (Attempted to address the task but lacked the required structure.) Feedback: A zero-shot prompt must explicitly state the task (e.g., "Classify this log entry as authentication_success or authentication_failure") and include the log entry as input. Try again with a clear instruction and the log entry as a single input block. 📊 Score: 2/40


## Attempt # 3
My Prompt
Classify this log entry as either authentication_success or authentication_failure: "2025-02-17 14:23:11 Failed Log In Attempt to database"

Results
📝 CHALLENGE 1 RESULT Technique check: The prompt correctly follows zero-shot structure—it provides an instruction and a task input (log entry) without any examples. However, the phrasing could be more explicit about the classification criteria (e.g., keywords like "Failed" or "Success"). ✅ 7/10 — Good Feedback: The task is clear, but adding a brief hint (e.g., "Look for keywords like 'success,' 'fail,' or 'denied'") would improve reliability. The log entry is appropriately formatted as input. 📊 Score: 7/40

# Challenge # 2
🎯 CHALLENGE 2 Technique: One-shot Definition: Exactly one input/output example demonstrating the task, then the actual task. Task: Write a one-shot prompt that asks an AI to extract Indicators of Compromise (IOCs) from a suspicious file path. Include one example pair (file path → IOCs) before the task. Tip: Use a clear placeholder (e.g., `[FILE_PATH]`) for the actual input.


Find Indicators of Compromise (IOCs) from the Windows file path: C:\Windows\Temp. For example look for .exe or .dll or ps1 extensions.

📝 CHALLENGE 2 RESULT Technique check: The prompt includes a single example (the instruction to look for `.exe`, `.dll`, or `.ps1` extensions) but lacks a concrete input/output pair—it only describes the task without showing a prior file path and its extracted IOCs. The placeholder `[FILE_PATH]` was not used. ✅ 5/10 — Good Feedback: The intent is clear, but a one-shot prompt *must* show a prior file path (e.g., `"C:\Temp\malicious.exe"` → `"IOCs: malicious.exe, C:\Temp\"`) followed by the actual task. The tip about extensions is helpful but not enough alone.


# Challenge # 3
My Prompt
Analyze these security events: - Brute force Attempt Detected from India - IP 201.13.2.10 | high - Brute force Attempt Detected from USA - IP 100.3.4.90 | low - Failed Login Attempt for user David - 1 Attempt | low - Failed Login Attempt for user Admin - 10 Attempt | high Triage the following security event: Failed Login Attempt for user Sara - 1 Attempt

📝 CHALLENGE 3 RESULT Technique check: The submission includes four varied input/output pairs (alert descriptions + severity labels) before the task, which correctly follows the few-shot technique. However, the prompt itself is missing an explicit instruction to "triage" the event—it assumes the user knows what to do. ✅ 8/10 — Great Feedback: The examples are well-structured and varied, covering brute-force attempts and failed logins with different severities. Adding a clear instruction like *"Triage the following security event by assigning a severity level (critical/high/medium/low) based on the examples above:"* would make it more robust.

# Challenge # 4
Technique: Chain-of-Thought Definition: Explicitly requests step-by-step reasoning before the final answer. Zero-shot CoT uses "think step by step"; few-shot CoT shows a worked example with visible reasoning steps. Task: Write a chain-of-thought prompt that asks an AI to detect SQL injection vulnerabilities in a snippet of Python code. Include reasoning steps (e.g., "Is user input concatenated directly into SQL?"). Tip: Use a placeholder like `[CODE_SNIPPET]` for the actual input.

My Prompt
Analyze the following Python code to detect SQL Injection and explain your reasoning step by step: query = f"SELECT * FROM users WHERE username = '{username}' AND password = '{password}'"

📝 CHALLENGE 4 RESULT Technique check: The prompt correctly uses a zero-shot chain-of-thought approach by explicitly requesting step-by-step reasoning ("explain your reasoning step by step") for SQL injection detection. However, it lacks a clear instruction to *identify* the vulnerability beyond analysis—it assumes the AI will infer the next step. ✅ 9/10 — Excellent Feedback: The reasoning prompt is strong, but adding a specific question like *"Does this code contain a SQL injection vulnerability? Justify your answer with 2–3 reasoning steps."* would make it more actionable. The code snippet is well-chosen for demonstration.

# Challenge # 5
Analyze JavaScript code snippets and detect Cross-Site Scripting Vulnerabilities:
Context: 


# Challenge # 6

🎯 CHALLENGE 6 Technique: Few-shot Definition: 2–5 input/output pairs covering varied cases, followed by the actual task. Task: Write a few-shot prompt that asks an AI to summarise security incidents from raw logs. Include 3–4 varied log snippets with concise incident summaries before the task. Tip: Use consistent log formats (e.g., timestamps, severity levels) and varied incident types (e.g., brute force, data exfiltration).

Given the following raw logs analyze and provide a summary of these security incidents:
- 2026-01-01 01:00:00 Brute Force Attempts Count 120 - Critical
- 2026-01-26 12:00:36 Failed Login Attempt Count 1 - Low
- 2026-01-31 03:33:30 Sensitive Data Exfiltration by Administrator - Medium
- 2026-02-01 01:12:00 Failed Login Attempt Count 6 - Medium
- 2026-02-01 02:56:00 Sensitive Data Exfiltration by Guest - Critical
  Now Classify: 2026-04-17 11:00:00 Brute Force Attempts Count 150

THM{Pr0mpt_3ng1neer}
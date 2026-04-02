questions = [
    {
        "question": "Capital of India?",
        "options": ["Delhi", "Mumbai", "Chennai"],
        "answer": "Delhi"
    },
    {
        "question": "2 + 2 = ?",
        "options": ["3", "4", "5"],
        "answer": "4"
    }
]

def start_quiz():
    score = 0

    for q in questions:
        print("\n" + q["question"])
        for opt in q["options"]:
            print(opt)

        user_answer = input("Enter your answer: ")

        # Input validation
        if user_answer not in q["options"]:
            print("Invalid option!")
            continue

        # Score calculation
        if user_answer == q["answer"]:
            score += 1

    print(f"\nYour Score: {score}/{len(questions)}")

start_quiz()
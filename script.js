function emojiCallFunction(cb) {
    fetch("emojis.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    "Emoji Fetch Failed"
                );
            }
            return response.json();
        })
        .then((data) => {
            cb(data);
        })
        .catch((error) => {
            console.error(
                "Error Occured:",
                error
            );
            cb({});
        });
}

function randomEmoji(emojiIn) {
    const randombtn =
        document.getElementById(
            "generate-random-btn"
        );
    randombtn.addEventListener(
        "click",
        () => {
            emojiShow(emojiIn);
        }
    );
}

function emojiShow(emojiInfo) {
    const Moodfeel =
        Object.keys(emojiInfo);
    const randomFeel =
        Moodfeel[
            Math.floor(
                Math.random() *
                    Moodfeel.length
            )
        ];
    const emojiIcon =
        emojiInfo[randomFeel];
    if (
        emojiIcon &&
        emojiIcon.length > 0
    ) {
        const anyEmoji =
            emojiIcon[
                Math.floor(
                    Math.random() *
                        emojiIcon.length
                )
            ];
        previewEmoji(
            randomFeel,
            anyEmoji.emoji
        );
    }
}

function previewEmoji(mood, emo) {
    document.getElementById(
        "emoji-name"
    ).textContent = mood;
    document.getElementById(
        "emoji"
    ).textContent = emo;
}

function defaultEmoji() {
    emojiCallFunction(function (
        emojiData
    ) {
        document
            .querySelectorAll(
                ".feeling-button"
            )
            .forEach((button) => {
                button.addEventListener(
                    "click",
                    () => {
                        const feeling =
                            button
                                .dataset
                                .feeling;
                        const emoji =
                            emojiData[
                                feeling
                            ];
                        if (
                            emoji &&
                            emoji.length >
                                0
                        ) {
                            const anyEmoji =
                                emoji[
                                    Math.floor(
                                        Math.random() *
                                            emoji.length
                                    )
                                ];
                            previewEmoji(
                                feeling,
                                anyEmoji.emoji
                            );
                        }
                    }
                );
            });
        randomEmoji(emojiData);
        emojiShow(emojiData);
    });
}

defaultEmoji();
// Emoji.json
{
    "Happy"; [
        { "emoji": "????", "name": "Grinning Face" },
        { "emoji": "????", "name": "Beaming Face with Smiling Eyes" },
        { "emoji": "????", "name": "Smiling Face with Open Mouth and Smiling Eyes" },
        { "emoji": "????", "name": "Grinning Face with Big Eyes" },
        { "emoji": "????", "name": "Grinning Squinting Face" },
        { "emoji": "????", "name": "Grinning Face with Sweat" },
        { "emoji": "????", "name": "Slightly Smiling Face" },
        { "emoji": "????", "name": "Smiling Face with Smiling Eyes" },
        { "emoji": "????", "name": "Smiling Face with Halo" },
        { "emoji": "????", "name": "Smiling Face with Hearts" },
        { "emoji": "????", "name": "Heart Eyes" },
        { "emoji": "????", "name": "Star-Struck" },
        { "emoji": "????", "name": "Face Blowing a Kiss" },
        { "emoji": "????", "name": "Kissing Face" },
        { "emoji": "????", "name": "Kissing Face with Smiling Eyes" },
        { "emoji": "????", "name": "Face Savoring Food" },
        { "emoji": "????", "name": "Face with Tongue" },
        { "emoji": "????", "name": "Winking Face with Tongue" },
        { "emoji": "????", "name": "Partying Face" },
        { "emoji": "????", "name": "Grinning Cat Face" }
    ],
        "Sad"; [
            { "emoji": "????", "name": "Disappointed Face" },
            { "emoji": "????", "name": "Pensive Face" },
            { "emoji": "????", "name": "Crying Face" },
            { "emoji": "????", "name": "Loudly Crying Face" },
            { "emoji": "????", "name": "Weary Face" },
            { "emoji": "????", "name": "Tired Face" },
            { "emoji": "????", "name": "Suffering Face" },
            { "emoji": "????", "name": "Confounded Face" },
            { "emoji": "????", "name": "Anxious Face with Sweat" },
            { "emoji": "????", "name": "Fearful Face" },
            { "emoji": "????", "name": "Downcast Face with Sweat" },
            { "emoji": "????", "name": "Sad but Relieved Face" },
            { "emoji": "????", "name": "Pleading Face" },
            { "emoji": "????", "name": "Crying Face" },
            { "emoji": "????", "name": "Crying Cat Face" },
            { "emoji": "????", "name": "Disappointed Face" },
            { "emoji": "????", "name": "Worried Face" },
            { "emoji": "????", "name": "Slightly Frowning Face" },
            { "emoji": "", "name": "Frowning Face" },
            { "emoji": "????", "name": "Confounded Face" }
        ],
            "Angry"; [
                { "emoji": "????", "name": "Angry Face" },
                { "emoji": "????", "name": "Pouting Face" },
                { "emoji": "????", "name": "Face with Symbols on Mouth" },
                { "emoji": "????", "name": "Face with Steam From Nose" },
                { "emoji": "????", "name": "Expressionless Face" },
                { "emoji": "????", "name": "Unamused Face" },
                { "emoji": "????", "name": "Pouting Cat Face" },
                { "emoji": "????", "name": "Confused Face" },
                { "emoji": "????", "name": "Slightly Frowning Face" },
                { "emoji": "", "name": "Frowning Face" },
                { "emoji": "????", "name": "Confounded Face" },
                { "emoji": "????", "name": "Suffering Face" },
                { "emoji": "????", "name": "Tired Face" },
                { "emoji": "????", "name": "Angry Face" },
                { "emoji": "????", "name": "Pouting Face" },
                { "emoji": "????", "name": "Face with Symbols on Mouth" },
                { "emoji": "????", "name": "Face with Steam From Nose" },
                { "emoji": "????", "name": "Unamused Face" },
                { "emoji": "????", "name": "Pouting Cat Face" },
                { "emoji": "????", "name": "Confused Face" }
            ],
                "Excited"; [
                    { "emoji": "????", "name": "Grinning Face with Big Eyes" },
                    { "emoji": "????", "name": "Star-Struck" },
                    { "emoji": "????", "name": "Smiling Face with Sunglasses" },
                    { "emoji": "????", "name": "Partying Face" },
                    { "emoji": "????", "name": "Beaming Face with Smiling Eyes" },
                    { "emoji": "????", "name": "Grinning Squinting Face" },
                    { "emoji": "????", "name": "Zany Face" },
                    { "emoji": "????", "name": "Grinning Face" },
                    { "emoji": "????", "name": "Smiling Face with Open Mouth and Smiling Eyes" },
                    { "emoji": "????", "name": "Face with Tears of Joy" },
                    { "emoji": "????", "name": "Rolling on the Floor Laughing" },
                    { "emoji": "????", "name": "Grinning Face with Sweat" },
                    { "emoji": "????", "name": "Slightly Smiling Face" },
                    { "emoji": "????", "name": "Smiling Face with Smiling Eyes" },
                    { "emoji": "????", "name": "Smiling Face with Halo" },
                    { "emoji": "????", "name": "Smiling Face with Hearts" },
                    { "emoji": "????", "name": "Heart Eyes" },
                    { "emoji": "????", "name": "Face Blowing a Kiss" },
                    { "emoji": "????", "name": "Kissing Face" },
                    { "emoji": "????", "name": "Kissing Face with Closed Eyes" }
                ]
}
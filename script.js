const cardUsername = document.querySelector('.card-username').textContent
const input = document.querySelector('.message-input-field');
const chatMessages = document.querySelector('.chat-messages');


input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && input.value.trim() !== '') {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('message-wrapper');

        const avatar = document.createElement('img');
        avatar.classList.add('chat-avatar');
        avatar.src = 'balenciaga_26.gif'; 
        avatar.alt = 'avatar';

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');

        const username = document.createElement('div');
        username.classList.add('chat-username');
        username.textContent = `${cardUsername}`;

        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        const now = new Date();
        timestamp.textContent = now.toLocaleString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' });

        username.appendChild(timestamp);

        const messageText = document.createElement('div');
        messageText.classList.add('message-text');
        messageText.textContent = input.value;

        messageContent.appendChild(username);
        messageContent.appendChild(messageText);

        messageWrapper.appendChild(avatar);
        messageWrapper.appendChild(messageContent);

        chatMessages.appendChild(messageWrapper);
        chatMessages.scrollTop = chatMessages.scrollHeight;

        input.value = '';
    }
});
    

    const ac = document.querySelector('.panel-course-unactive')
    const b = document.querySelector('.panel-course p:first-child')
    const a = document.querySelector('.panel-course');
    b.addEventListener('click', function() {
        a.remove();
        ac.style.borderTop = '';

    })


    const accountIcon = document.getElementById('account-icon');
    const card = document.querySelector('.card');
    
    accountIcon.addEventListener('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        card.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (card.classList.contains('show')) {
            const isClickInsideCard = card.contains(event.target);
            const isClickOnAccountIcon = accountIcon.contains(event.target);
            
            if (!isClickInsideCard && !isClickOnAccountIcon) {
                card.classList.remove('show');
            }
        }
    });


    card.addEventListener('click', function(event) {
        event.stopPropagation();
    });

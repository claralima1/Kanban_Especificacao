function mostrarMensagem() {
    // Criar um modal moderno
    const modal = document.createElement('div');
    modal.id = 'kanbanModal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        animation: fadeIn 0.3s forwards;
    `;
    
    // Conteúdo do modal
    modal.innerHTML = `
        <div style="
            background: white;
            border-radius: 20px;
            padding: 2.5rem;
            max-width: 500px;
            width: 90%;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
            position: relative;
            transform: translateY(20px);
            animation: slideUp 0.4s forwards 0.1s;
        ">
            <button id="closeModal" style="
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                color: #64748b;
                cursor: pointer;
                transition: color 0.3s;
            ">&times;</button>
            
            <h2 style="
                color: #3b82f6;
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                <i class="fas fa-info-circle"></i> Sobre o Kanban
            </h2>
            
            <p style="margin-bottom: 1.5rem; line-height: 1.7;">
                O método Kanban foi originalmente desenvolvido pela Toyota para otimizar a produção. 
                No desenvolvimento de software, ele ajuda a visualizar o fluxo de trabalho, 
                limitar o trabalho em progresso e maximizar a eficiência da equipe.
            </p>
            
            <div style="
                background-color: #f0f9ff;
                border-left: 4px solid #3b82f6;
                padding: 1rem;
                border-radius: 0 8px 8px 0;
                margin-bottom: 1.5rem;
            ">
                <p style="margin: 0; font-style: italic; color: #0369a1;">
                    "O Kanban muda o foco de prazos arbitrários para a otimização do fluxo contínuo de valor."
                </p>
            </div>
            
            <p style="margin-bottom: 1.5rem;">
                Este modelo de ciclo de vida apresenta 6 etapas principais, desde a concepção da ideia 
                até o monitoramento pós-implantação.
            </p>
            
            <button id="closeModalBtn" style="
                background: linear-gradient(to right, #3b82f6, #6366f1);
                color: white;
                border: none;
                padding: 0.8rem 1.8rem;
                border-radius: 50px;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 8px;
                margin: 0 auto;
                transition: all 0.3s;
            ">
                <i class="fas fa-check"></i> Entendi
            </button>
        </div>
    `;
    
    // Adicionar o modal ao corpo da página
    document.body.appendChild(modal);
    
    // Adicionar estilos de animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        
        @keyframes slideUp {
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Funções para fechar o modal
    const closeModal = () => {
        modal.style.animation = 'fadeIn 0.3s reverse forwards';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    // Adicionar eventos de clique
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);
    
    // Fechar ao clicar fora do modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fechar com a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Adicionar efeito de destaque às seções quando roladas
document.addEventListener('DOMContentLoaded', function() {
    // Observador de interseção para animação de entrada
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, observerOptions);
    
    // Observar as seções e cards
    document.querySelectorAll('section, .kanban-card').forEach(el => {
        observer.observe(el);
    });
    
    // Adicionar classe inicial para animação
    document.querySelectorAll('.kanban-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
});
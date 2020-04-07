//�˺������ڴ������ư�ť
function createCopyBtns() {
    var $codeArea = $("figure table");
    //�鿴ҳ���Ƿ���д�������û�д�����򲻴��� ���ư�ť
    if ($codeArea.length > 0) {
        //���Ƴɹ���Ҫ�ɵ�����
        function changeToSuccess(item) {
             $imgOK = $("#copyBtn").find("#imgSuccess");
                if ($imgOK.css("display") == "none") {
                    $imgOK.css({
                        opacity: 0,
                        display: "block"
                    });
                    $imgOK.animate({
                        opacity: 1
                    }, 1000);
                    setTimeout(function() {
                        $imgOK.animate({
                            opacity: 0
                        }, 2000);
                    }, 2000);
                    setTimeout(function() {
                        $imgOK.css("display", "none");
                    }, 4000);
                };
        };
        //���� ȫ�ָ��ư�ť������һ�顣���������ư�ť�����Ƴɹ���Ӧ��ť
        //ֵ��ע����ǣ�1.��ťĬ�����أ�2.λ��ʹ�þ���λ�� position: absolute; (position: fixed Ҳ���ԣ���Ҫ�޸Ĵ���)
        $(".post-body").before('<div id="copyBtn" style="opacity: 0; position: absolute;top:0px;display: none;line-height: 1; font-size:1.5em"><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');
        //���� ���� ������󶨵���ʱ�䵽 ָ��Ԫ�أ�֧��JQuery
        var clipboard = new Clipboard('#copyBtn', {
            target: function() {
                //������Ҫ���Ƶ�Ԫ������
                return document.querySelector("[copyFlag]");
            },
            isSupported: function() {
                //֧�ָ�������
                return document.querySelector("[copyFlag]");
            }
        });
        //���Ƴɹ��¼���
        clipboard.on('success',
            function(e) {
                //������ݱ�ѡ��״̬
                e.clearSelection();
                changeToSuccess(e);
            });
        //����ʧ�ܰ��¼�
        clipboard.on('error',
            function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
        //��� �ڸ��ư�ť�ϻ������뿪�󽥱���ʾ/����Ч��
        $("#copyBtn").hover(
            function() {
                $(this).stop();
                $(this).css("opacity", 1);
            },
            function() {
                $(this).animate({
                    opacity: 0
                }, 2000);
            }
        );
    }
}
//��Ӧ����Ƿ��ڴ�����
$("figure").hover(
    function() {
        //-------����ڴ������
        //�Ƴ�֮ǰ���и��Ʊ�־������ copyFlag
        $("[copyFlag]").removeAttr("copyFlag");
        //���µģ���ǰ������ڴ����������������־��copyFlag
        $(this).find(".code").attr("copyFlag", 1);
        //��ȡ���ư�ť
        $copyBtn = $("#copyBtn");
        if ($copyBtn.lenght != 0) {
            //��ȡ����ť��ǰ���½���һ�²���
            //ֹͣ��ť����Ч��
            //����Ϊ ��ʾ״̬
            //�޸� ���ư�ť λ�õ� ��ǰ����鿪ʼ��λ
            //���ô���� ���λ��
            $copyBtn.stop();
            $copyBtn.css("opacity", 0.8);
            $copyBtn.css("display", "block");
            $copyBtn.css("top", parseInt($copyBtn.css("top")) + $(this).offset().top - $copyBtn.offset().top + 3);
            $copyBtn.css("left", -$copyBtn.width() - 3);
        }
    },
    function() {
        //-------����뿪�����
        //���ø��ư�ť�ɼ��� 2���ڵ� 0
        $("#copyBtn").animate({
            opacity: 0
        }, 2000);
    }
);
//ҳ��������ɺ󣬴������ư�ť
$(document).ready(function() {
  createCopyBtns();
});
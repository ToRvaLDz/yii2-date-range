/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014
 *
 * Brazilian Portuguese language translation configuration for DateRangePicker widget.
 *
 * Author: Leandro Guindani Gehlen
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */

 /**
 * Set moment i18n configuration
 */
moment.lang('pt-BR', {
    months : "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
    monthsShort : "Jan_Fev_Mar_Abr_Mai_Jun_Jul._Ago_Set_Out_Nov_Dez".split("_"),
    weekdays : "Domingo_Segunda_Terça_Quarta_Quinta_Sexta_Sábado".split("_"),
    weekdaysShort : "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
    weekdaysMin : "Do_Se_Te_Qa_Qi_Se_Sá".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Hoje] LT",
        nextDay: '[Amanhã] LT',
        nextWeek: 'dddd [para] LT',
        lastDay: '[Ontem] LT',
        lastWeek: 'dddd [Última semana] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "Em %s",
        past : "%s atrás",
        s : "segundos",
        m : "um minuto",
        mm : "%d minutes",
        h : "uma hora",
        hh : "%d horas",
        d : "um dia",
        dd : "%d dias",
        M : "um mês",
        MM : "%d meses",
        y : "um ano",
        yy : "%d anos"
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

/**
 * Set variable name `dpr_locale_<lang>`
 */
var dpr_locale_pt_BR = {
    applyLabel: 'Aplicar',
    cancelLabel: 'Cancelar',
    fromLabel: 'De',
    toLabel: 'Até',
    weekLabel: 'W',
    customRangeLabel: 'Intervalo personalizado',
    daysOfWeek: moment()._lang._weekdaysMin.slice(),
    monthNames: moment()._lang._monthsShort.slice(),
    firstDay: 1
};
/**
 * Funções puras para validar uma data civil e calcular idade sem depender de
 * milissegundos. Isso evita erros em anos bissextos e mudanças de fuso horário.
 */

export function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

export function daysInMonth(year, month) {
  const days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[month - 1] || 0;
}

export function formatDateInput(value) {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 2) return digits;
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

export function getLocalToday() {
  const now = new Date();
  return { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
}

function compareDates(left, right) {
  if (left.year !== right.year) return left.year - right.year;
  if (left.month !== right.month) return left.month - right.month;
  return left.day - right.day;
}

function dateFromText(text) {
  const match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(text);
  if (!match) return null;
  return { day: Number(match[1]), month: Number(match[2]), year: Number(match[3]) };
}

export function validateBirthDate(text, today = getLocalToday()) {
  if (!text.trim()) return { valid: false, message: 'Informe sua data de nascimento.' };

  const date = dateFromText(text);
  if (!date) return { valid: false, message: 'Use o formato DD/MM/AAAA.' };
  if (date.day < 1 || date.day > 31) return { valid: false, message: 'Informe um dia entre 01 e 31.' };
  if (date.month < 1 || date.month > 12) return { valid: false, message: 'Informe um mês entre 01 e 12.' };
  if (date.year < 1) return { valid: false, message: 'Informe um ano válido.' };
  if (date.day > daysInMonth(date.year, date.month)) {
    return { valid: false, message: 'Essa data não existe no calendário.' };
  }
  if (compareDates(date, today) > 0) return { valid: false, message: 'A data de nascimento não pode estar no futuro.' };

  return { valid: true, date };
}

function addYears(date, years) {
  const year = date.year + years;
  return { year, month: date.month, day: Math.min(date.day, daysInMonth(year, date.month)) };
}

function addMonths(date, months) {
  const monthIndex = date.year * 12 + (date.month - 1) + months;
  const year = Math.floor(monthIndex / 12);
  const month = (monthIndex % 12) + 1;
  return { year, month, day: Math.min(date.day, daysInMonth(year, month)) };
}

function daysSinceEpoch(date) {
  // Algoritmo de dias civis de Howard Hinnant, com 01/03 como início do ano.
  const adjustedYear = date.year - (date.month <= 2 ? 1 : 0);
  const era = Math.floor(adjustedYear / 400);
  const yearOfEra = adjustedYear - era * 400;
  const shiftedMonth = date.month + (date.month > 2 ? -3 : 9);
  const dayOfYear = Math.floor((153 * shiftedMonth + 2) / 5) + date.day - 1;
  const dayOfEra = yearOfEra * 365 + Math.floor(yearOfEra / 4) - Math.floor(yearOfEra / 100) + dayOfYear;
  return era * 146097 + dayOfEra;
}

export function calculateCalendarAge(birthDate, today = getLocalToday()) {
  let years = today.year - birthDate.year;
  let anniversary = addYears(birthDate, years);
  if (compareDates(anniversary, today) > 0) {
    years -= 1;
    anniversary = addYears(birthDate, years);
  }

  let months = (today.year - anniversary.year) * 12 + (today.month - anniversary.month);
  let monthiversary = addMonths(anniversary, months);
  if (compareDates(monthiversary, today) > 0) {
    months -= 1;
    monthiversary = addMonths(anniversary, months);
  }

  const days = daysSinceEpoch(today) - daysSinceEpoch(monthiversary);
  return { years, months, days };
}

export function getAgeGroup(years) {
  if (years <= 19) return 'Jovem';
  if (years <= 59) return 'Adulto';
  return 'Idoso';
}

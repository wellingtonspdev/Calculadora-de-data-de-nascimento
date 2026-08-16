import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0F172A' },
  keyboardContainer: { flex: 1, backgroundColor: '#0F172A' },
  content: { flexGrow: 1, justifyContent: 'center', overflow: 'hidden', paddingHorizontal: 20, paddingVertical: 28 },
  glow: { position: 'absolute', borderRadius: 999, backgroundColor: '#8B5CF6', opacity: 0.12 },
  glowTop: { width: 230, height: 230, top: -105, right: -85 },
  glowBottom: { width: 180, height: 180, bottom: -78, left: -78, backgroundColor: '#6366F1', opacity: 0.09 },
  header: { marginBottom: 24 },
  headerBadge: { alignSelf: 'flex-start', backgroundColor: 'rgba(139, 92, 246, 0.14)', borderColor: 'rgba(167, 139, 250, 0.36)', borderRadius: 999, borderWidth: 1, marginBottom: 14, paddingHorizontal: 11, paddingVertical: 6 },
  headerBadgeText: { color: '#C4B5FD', fontSize: 10, fontWeight: '800', letterSpacing: 1.1, textTransform: 'uppercase' },
  title: { color: '#F9FAFB', fontSize: 32, fontWeight: '800', letterSpacing: -0.6, marginBottom: 9 },
  subtitle: { color: '#9CA3AF', fontSize: 16, lineHeight: 24, maxWidth: 420 },
  formCard: { backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 255, 255, 0.10)', borderRadius: 16, borderWidth: 1, elevation: 6, padding: 20, shadowColor: '#000000', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.28, shadowRadius: 20 },
  label: { color: '#C4B5FD', fontSize: 11, fontWeight: '800', letterSpacing: 1.15, marginBottom: 10, textTransform: 'uppercase' },
  input: { backgroundColor: 'rgba(15, 23, 42, 0.72)', borderColor: 'rgba(255, 255, 255, 0.14)', borderRadius: 12, borderWidth: 1, color: '#F9FAFB', fontSize: 20, letterSpacing: 1.5, paddingHorizontal: 15, paddingVertical: 14 },
  inputError: { borderColor: '#FB7185' },
  errorText: { color: '#FDA4AF', fontSize: 13, lineHeight: 19, marginTop: 9 },
  button: { alignItems: 'center', backgroundColor: '#7C3AED', borderColor: 'rgba(196, 181, 253, 0.45)', borderRadius: 12, borderWidth: 1, elevation: 4, marginTop: 20, paddingVertical: 15, shadowColor: '#8B5CF6', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.3, shadowRadius: 12 },
  buttonPressed: { backgroundColor: '#6D28D9', opacity: 0.92, transform: [{ scale: 0.985 }] },
  buttonText: { color: '#F9FAFB', fontSize: 16, fontWeight: '800', letterSpacing: 0.1 },
  resultCard: { alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)', borderColor: 'rgba(139, 92, 246, 0.28)', borderRadius: 16, borderWidth: 1, elevation: 5, marginTop: 18, padding: 20, shadowColor: '#8B5CF6', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.16, shadowRadius: 18 },
  resultEyebrow: { color: '#A5B4FC', fontSize: 10, fontWeight: '800', letterSpacing: 1.1, marginBottom: 7, textTransform: 'uppercase' },
  resultTitle: { color: '#F9FAFB', fontSize: 18, fontWeight: '800', marginBottom: 8 },
  ageText: { color: '#E5E7EB', fontSize: 20, fontWeight: '700', lineHeight: 29, textAlign: 'center' },
  badge: { backgroundColor: 'rgba(99, 102, 241, 0.22)', borderColor: 'rgba(165, 180, 252, 0.38)', borderRadius: 999, borderWidth: 1, marginTop: 15, paddingHorizontal: 16, paddingVertical: 7 },
  badgeText: { color: '#E0E7FF', fontSize: 12, fontWeight: '800', letterSpacing: 0.8, textTransform: 'uppercase' }
});

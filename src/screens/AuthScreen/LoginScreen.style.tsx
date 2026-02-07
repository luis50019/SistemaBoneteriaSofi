import { StyleSheet } from "react-native";
import { COLORS } from "../../core/const/color";
export const StyleLoginScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_PRIMARY,
  },

  header: {
    alignItems: "center",
    paddingTop: 48,
    paddingBottom: 32,
  },

  logoCircle: {
    backgroundColor: COLORS.PRIMARY,
    padding: 16,
    borderRadius: 999,
    marginBottom: 12,
  },

  brand: {
    color: COLORS.PRIMARY,
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1,
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    elevation: 10,
  },

  titleContainer: {
    alignItems: "center",
    marginBottom: 32,
  },

  title: {
    fontSize: 34,
    fontWeight: "800",
    color: COLORS.TEXT_DARK,
  },

  subtitle: {
    fontSize: 18,
    color: "#896175",
    marginTop: 4,
  },

  field: {
    marginBottom: 24,
  },

  label: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 8,
    marginBottom: 8,
    color: COLORS.TEXT_DARK,
  },

  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconBox: {
    borderWidth: 2,
    borderColor: "#e6dbe0",
    borderRightWidth: 0,
    paddingLeft: 16,
    height: 64,
    justifyContent: "center",
    borderTopLeftRadius: 999,
    borderBottomLeftRadius: 999,
  },

  input: {
    flex: 1,
    height: 64,
    borderWidth: 2,
    borderColor: "#e6dbe0",
    borderLeftWidth: 0,
    borderTopRightRadius: 999,
    borderBottomRightRadius: 999,
    paddingHorizontal: 16,
    fontSize: 20,
    fontWeight: "600",
    color: COLORS.TEXT_DARK,
  },

  forgot: {
    color: COLORS.PRIMARY,
    fontWeight: "700",
    textAlign: "right",
    marginTop: 8,
    marginRight: 8,
    textDecorationLine: "underline",
  },

  loginButton: {
    marginTop: 16,
    height: 60,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 999,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    elevation: 6,
  },

  loginText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "900",
  },

  registerContainer: {
    marginTop: 32,
    alignItems: "center",
    gap: 12,
  },

  registerText: {
    color: "#896175",
    fontWeight: "600",
  },

  registerButton: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: COLORS.PRIMARY + "33",
    backgroundColor: COLORS.PRIMARY + "1A",
  },

  registerButtonText: {
    color: COLORS.PRIMARY,
    fontWeight: "800",
  },

  topLine: {
    position: "absolute",
    top: 0,
    height: 4,
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
  },

  bottomLine: {
    position: "absolute",
    bottom: 0,
    height: 4,
    width: "100%",
    backgroundColor: COLORS.PRIMARY,
  },
});